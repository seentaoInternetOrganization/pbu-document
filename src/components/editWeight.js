/**
 * @author AngusC
 * @description 编辑权重及甄别方式
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './editWeight.css';
import { intersectRect } from '../utils';
import { EXAMINE, ELEMENT, ELEMENT_TYPE, EXAMINE_NAME, EXAMINE_COLOR, EXAMINE_TEXT } from '../constants';
import stylesBG from './background.css';
import isEmpty from 'validator/lib/isEmpty';
import isInt from 'validator/lib/isInt';
import md5 from 'blueimp-md5';
import Rectangle, { zeroRect, makeRect } from './selectedRectangle';
import reactComposition from 'react-composition';
import EditWeightHeader from './weightHeader';

class EditWeight extends Component {
    state = {
        currentExamineType: '',
        //是否显示选择框
        showSelectRect: false,
        //选择框信息
        selectRect: zeroRect(),
        //当前选中的元素们
        selectedElement: {},
        //编辑完成的元素们
        completedElement: {},
        //用于生成tag
        examineTypeIndex: {},
        selectedTag: '',
        editTagId: '',
        editTagName: '',
        tagNameBackup: ''
    }

    componentDidMount() {
        this.combineDataIntoCompleted(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.combineDataIntoCompleted(nextProps);
    }

    combineDataIntoCompleted = (props) => {
        const { data, config } = props;

        if (!data) {
            return;
        }

        //去掉不属于此单据的元素
        const newCompletedElement = Object.keys(data.all).filter(key => {
            return !!config[0].elements[key] && data.all[key].examineType
        }).reduce((sum, key) => {
            return {
                ...sum,
                [key]: {
                    ...data.all[key],
                    element: config[0].elements[key]
                }
            }
        }, {})

        this.setState({
            completedElement: newCompletedElement
        })
    }

    onExamineTypeChange = (type) => {
        this.setState({
            currentExamineType: type
        })
    }

    onMouseDown = (e) => {
        const xInContainer = e.clientX - this.refs.docContainer.getBoundingClientRect().left + this.refs.docContainer.scrollLeft;
        const yInContainer = e.clientY - this.refs.docContainer.getBoundingClientRect().top + this.refs.docContainer.scrollTop;

        this.setState({
            showSelectRect: true,
            selectRect: makeRect(xInContainer, yInContainer, xInContainer, yInContainer, 0, 0)
        })
    }

    onMouseUp = (e) => {
        //只有当鼠标抬起时才会有下列操作
        //声明糖
        const { currentExamineType, selectedElement, completedElement, examineTypeIndex, selectedTag } = this.state;
        //首先计算examineId
        let examineId = `${currentExamineType}_${md5(Date.now())}`;

        if (!isEmpty(selectedTag)) {
            examineId = selectedTag
        }

        //然后将selectedElement移到completedElement区
        const newCompletedElement = {
            ...completedElement
        };

        const exIndex = {
            ...examineTypeIndex
        };

        let examineName = EXAMINE_NAME[currentExamineType];
        //生成标签
        if (exIndex.hasOwnProperty(currentExamineType)) {
            exIndex[currentExamineType].push({
                examineId,
                index: exIndex[currentExamineType].length,
                examineName: `${EXAMINE_NAME[currentExamineType]}${exIndex[currentExamineType].length}`
            });
            examineName = `${EXAMINE_NAME[currentExamineType]}${exIndex[currentExamineType].length}`;
        }else {
            exIndex[currentExamineType] = [{
                examineId,
                index: 0,
                examineName: `${EXAMINE_NAME[currentExamineType]}`
            }];
        }

        Object.values(selectedElement).forEach((item, index) => {
            if (currentExamineType === EXAMINE.MULTI_LINE
                && item.elmtype !== ELEMENT_TYPE.TABLE) {
                return;
            }
            //去掉checkbox和label
            if (item.type === ELEMENT.CHECK_BOX
                || item.type === ELEMENT.LABEL) {
                return;
            }

            newCompletedElement[item.name] = {
                weight: 1,
                examineType: currentExamineType,
                examineId,
                examineName,
                element: item
            }
        });

        this.setState({
            examineTypeIndex: exIndex,
            completedElement: newCompletedElement,
            selectedElement: {},
            showSelectRect: false,
            selectRect: zeroRect()
        })
    }

    onMouseLeave = (e) => {
        this.setState({
            showSelectRect: false,
            selectedElement: {},
            selectRect: zeroRect()
        })
    }

    onMouseMove = (e) => {
        const xInContainer = e.clientX - this.refs.docContainer.getBoundingClientRect().left + this.refs.docContainer.scrollLeft;
        const yInContainer = e.clientY - this.refs.docContainer.getBoundingClientRect().top + this.refs.docContainer.scrollTop;
        //声明糖
        const { currentExamineType, selectedElement, completedElement, selectRect } = this.state;
        //当鼠标反向选取时的计算
        const newLeft = xInContainer < selectRect.startLeft ? xInContainer : selectRect.startLeft;
        const newTop = yInContainer < selectRect.startTop ? yInContainer : selectRect.startTop;

        if (this.state.showSelectRect) {
            const elements = this.props.config[0].elements;
            let newSelectedElement = {
                ...selectedElement
            };

            Object.values(elements).forEach((item, index) => {
                if (intersectRect(item.pos, selectRect)
                    && !completedElement.hasOwnProperty(item.name)) {
                    newSelectedElement[item.name] = item;
                }else {
                    delete newSelectedElement[item.name];
                }
            })

            this.setState({
                selectRect: makeRect(newLeft,
                                    newTop,
                                    selectRect.startLeft,
                                    selectRect.startTop,
                                    Math.abs(xInContainer - selectRect.startLeft),
                                    Math.abs(yInContainer - selectRect.startTop)),
                selectedElement: newSelectedElement
            })
        }
    }

    //权重修改监听
    onWeightChange = (name, value) => {

        if (value.length > 0 && !isInt(value, { min: 0, max: 99 })) {
            return;
        }

        const { currentExamineType, completedElement } = this.state;

        const newCompletedElement = {
            ...completedElement
        }

        newCompletedElement[name].weight = value;

        this.setState({
            completedElement: newCompletedElement
        })
    }

    //删除选中的元素
    onRemoveCompleted = (name) => {
        const { currentExamineType, completedElement } = this.state;

        let newCompletedElement = {
            ...completedElement
        }
        //如果是多行编辑则删除时要删除掉整列
        if (newCompletedElement[name].examineType === EXAMINE.MULTI_LINE) {
            const tempObj = {
                ...newCompletedElement
            }

            //多行编辑情况下一定存在table.col
            Object.values(newCompletedElement).forEach((item, index) => {
                if (item.examineType === newCompletedElement[name].examineType
                    && item.element.table.col === newCompletedElement[name].element.table.col) {
                    delete tempObj[item.element.name];
                }
            });

            newCompletedElement = {
                ...tempObj
            }
        }else {
            delete newCompletedElement[name];
        }
        this.setState({
            completedElement: newCompletedElement
        })
    }

    //清除操作
    onClearAll = () => {
        this.setState({
            selectedElement: {},
            completedElement: {},
            examineTypeIndex: {},
            currentExamineType: ''
        })
    }

    //根据标签名删除
    onRemoveByTagId = (examineId) => {
        const { currentExamineType, completedElement } = this.state;

        const newCompletedElement = {
            ...completedElement
        }

        Object.values(completedElement).forEach((item, index) => {
            if (item.examineId === examineId) {
                delete newCompletedElement[item.element.name];
            }
        });

        this.setState({
            completedElement: newCompletedElement,
            selectedTag: ''
        })
    }

    onSelectTags = (examineId) => {
        this.setState({
            selectedTag: examineId === this.state.selectedTag ? '' : examineId
        })
    }

    onEditTag = e => {
        this.setState({
            editTagName:  e.target.value
        })
    }

    onTagDoubleClick = (examineId, examineName) => {
        this.setState({
            editTagId: examineId,
            editTagName: examineName,
            tagNameBackup: examineName,
        })
    }

    onTagBlur = () => {
        const newCompletedElement = {
            ...this.state.completedElement
        }

        Object.values(newCompletedElement).forEach(item => {
            if (item.examineId === this.state.editTagId) {
                if (!isEmpty(this.state.editTagName.trim())) {
                    item.examineName = this.state.editTagName
                }else {
                    item.examineName = this.state.tagNameBackup
                }
            }
        });

        this.setState({
            editTagId: '',
            selectedTag: '',
            tagNameBackup: '',
            completedElement: newCompletedElement
        })
    }

    onSave = (data) => {
        this.props.onSave(data);
    }

    render() {
        const { config, ratioWidth, ratioHeight, data, loading } = this.props;
        const {
            selectedElement,
            currentExamineType,
            completedElement,
            showSelectRect,
            selectRect,
            selectedTag,
            examineTypeIndex,
            editTagId,
            editTagName,
         } = this.state;

        //顶部操作渲染
        const renderTopHeader = () => {
            return (
                <EditWeightHeader config={config[0]}
                                all={completedElement}
                                editTagId={editTagId}
                                selectedTag={selectedTag}
                                onSave={this.onSave}
                                onClearAll={this.onClearAll}
                                onSelectTags={this.onSelectTags}
                                onTagDoubleClick={this.onTagDoubleClick}
                                onTagBlur={this.onTagBlur}
                                onRemoveByTagId={this.onRemoveByTagId}
                                onEditTag={this.onEditTag}
                                editTagName={editTagName}
                                loading={loading}
                />
            )
        }

        //渲染右侧设置项
        const renderRightContainer = () => {
            //渲染甄别方式选择radio
            const renderRadioButtons = () => {
                const radioNodes = Object.keys(EXAMINE_NAME).map((item, index) => {
                    let checkedOpt = {
                        checked: false
                    };

                    if (currentExamineType === item) {
                        checkedOpt = {
                            checked: 'checked'
                        }
                    }

                    return (
                        <label key={`${item}_${index}`} htmlFor={item} onClick={() => {
                            this.onExamineTypeChange(item)
                        }}>
                            <input type="radio" name="radio" id={item} {...checkedOpt} />
                            <span>{EXAMINE_NAME[item]}</span>
                        </label>
                    )
                });

                return radioNodes;
            }

            return (
                <div className={styles.right_container}>
                    <div>
                        {renderRadioButtons()}
                    </div>
                    <div className={styles.msg}>
                        {
                            Object.keys(EXAMINE).map(key => {
                                return (
                                    <p key={key}>
                                        <span>{EXAMINE_NAME[key]}：</span>
                                        {EXAMINE_TEXT[key]}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }

        //渲染选择完成区
        const renderCompletedZone = () => {
            const elementNodes = Object.values(completedElement).map((item, index) => {
                if (!item.element) {
                    return;
                }

                const { pos } = item.element;

                if (!isEmpty(selectedTag)
                    && selectedTag !== item.examineId) {
                    return null;
                }

                if (item.element.type === ELEMENT.CHECK_BOX
                    || item.element.type === ELEMENT.LABEL) {
                    return null;
                }

                const selected = {
                    border: `1px solid ${EXAMINE_COLOR[item.examineType]}`,
                    borderRadius: 2
                }

                return <div key={`${item.element.name}_${index}`}
                            style={{
                                position: "absolute",
                                left: pos.left * ratioWidth,
                                top: pos.top * ratioHeight,
                                width: pos.width * ratioWidth,
                                height: pos.height * ratioHeight,
                                ...selected
                            }}>
                            <input id={item.element.name}
                                style={{
                                    background: '#fff',
                                    padding:'0 10px'
                                }}
                                name={item.element.name}
                                value={item.weight}
                                onChange={(e) => {this.onWeightChange(item.element.name, e.target.value)}}
                            />
                                <i className={styles.iconfont}
                                    onClick={() => {
                                        this.onRemoveCompleted(item.element.name)
                                    }}
                                    style={{
                                        top: (pos.height * ratioHeight - 14)/2-4,
                                        color: EXAMINE_COLOR[item.examineType]
                                }}/>
                        </div>
            });

            return elementNodes;
        }

        //渲染选中的元素，并且待编辑状态
        const renderSelectedZone = () => {
            const elementNodes = Object.values(selectedElement).map((item, index) => {
                const selected = {
                    border: `1px solid ${EXAMINE_COLOR[currentExamineType]}`,
                    borderRadius: 2
                }

                const { pos } = item;

                return <input key={`${item.name}_${index}`}
                            id={item.name}
                            name={item.name}
                            style={{
                                position: "absolute",
                                left: pos.left * ratioWidth,
                                top: pos.top * ratioHeight,
                                width: pos.width * ratioWidth,
                                height: pos.height * ratioHeight,
                                ...item.style,
                                ...selected
                            }}
                        />
            })

            return elementNodes;
        }

        //渲染单据
        const renderDoc = () => {

            let mouseEventOpt = {};
            //只有选择了甄别方式才添加鼠标事件
            if (!isEmpty(currentExamineType)) {
                mouseEventOpt = {
                    onMouseDown: this.onMouseDown,
                    onMouseMove: this.onMouseMove,
                    onMouseLeave: this.onMouseLeave,
                    onMouseUp: this.onMouseUp
                };
            }

            return (
                <div ref={'docContainer'}
                    className={classnames(styles.detail, styles.left)}
                    style={{
                        background: `#FFFFFF url(${config[0].backgroundImage}) no-repeat center center`,
                        width: config[0].width * ratioWidth,
                        height: config[0].height * ratioHeight,
                        ...config[0].style
                    }}
                    {...mouseEventOpt}
                >
                    {renderSelectedZone()}
                    {renderCompletedZone()}
                    {showSelectRect && <Rectangle rect={selectRect} />}
                </div>
            )
        }

        return (
            <div>
                {renderTopHeader()}
                <div className={styles.content}>
                    {renderDoc()}
                    {renderRightContainer()}
                </div>
            </div>
        )
    }
}

export default EditWeight;

EditWeight.propTypes =  {
    /**
     * 单据配置信息，当前联的
     */
    config: PropTypes.array,
    /**
     * 横向缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 纵向缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
    /**
     * 需要展示的数据，权重和甄别方式相关
     */
    data: PropTypes.object,
    /**
     * 保存回调
     * @param {Object} data
     */
    onSave: PropTypes.func,
    /**
     * 加载中
     */
    loading: PropTypes.bool,
}

EditWeight.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null,
    loading: false,
    onSave: data => {
        console.log('data = ', data);
    }
}
