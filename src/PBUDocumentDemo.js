/**
 * @author Chenzhyc
 * @description 仿真纸质单据
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './PBUDocument.less';
import md5 from 'blueimp-md5';

function loadConfig(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callback(data.docConfig)
    })
    .catch(err => {
        console.log('err = ', err);
        callback();
    });
}
/**
 * 矩形碰撞检测
 * @param  {Object} r1 [description]
 * @param  {Object} r2 [description]
 * @return {Boolean}    [description]
 */
function intersectRect(r1, r2) {
    return !(r2.left > (r1.left + r1.width)
            || (r2.left + r2.width) < r1.left
            || r2.top > (r1.top + r1.height)
            || (r2.top + r2.height) < r1.top
        );
}

class PBUDocumentDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: props.docData && props.docData.all ? props.docData.all : {},
            copy: 0,
            page: 0,
            docConfig: [],
            docData: props.docData,
            errMsg: '',
            showSelectRect: false,
            selectRect: {
                startLeft: 0,
                startTop: 0,
                left: 0,
                top: 0,
                width: 0,
                height: 0
            },
            selectedElement: {},
            examineElements: {}
        }
    }

    componentDidMount() {
        loadConfig(this.props.docConfigUrl, docConfig => {

            if (!docConfig) {
                this.setState({
                    errMsg: '加载失败'
                })
            }else {
                this.setState({
                    docConfig: docConfig
                })
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            fields: nextProps.docData && nextProps.all ? nextProps.docData.all : {},
            docData: nextProps.docData
        })
    }

    onInputChange = (e) => {
        const newState = {
            ...this.state
        };

        newState.fields[e.target.name] = e.target.value;
        this.setState(newState);
    }

    onCheckboxChange = (e) => {

    }

    onSelectChange = (e) => {

    }

    onSubmit = (e) => {
        e.preventDefault();

        for (let i = 0; i < e.target.length; i++) {
            console.log(e.target[i].name, e.target[i].value);
        }
    }

    onCopyChange = (index) => {
        this.setState({
            copy: index,
        })
    }

    onMouseDown = (e) => {
        const xInContainer = e.clientX - this.refs.docContainer.getBoundingClientRect().left + this.refs.docContainer.scrollLeft;
        const yInContainer = e.clientY - this.refs.docContainer.getBoundingClientRect().top + this.refs.docContainer.scrollTop;

        this.setState({
            showSelectRect: true,
            selectRect: {
                left: xInContainer,
                top: yInContainer,
                startLeft: xInContainer,
                startTop: yInContainer,
                width: 0,
                height: 0
            }
        })
    }

    onMouseMove = (e) => {
        const selectRect = this.state.selectRect;
        const xInContainer = e.clientX - this.refs.docContainer.getBoundingClientRect().left + this.refs.docContainer.scrollLeft;
        const yInContainer = e.clientY - this.refs.docContainer.getBoundingClientRect().top + this.refs.docContainer.scrollTop;

        let newLeft = selectRect.startLeft;

        if (xInContainer < selectRect.startLeft) {
            newLeft = xInContainer;
        }

        let newTop = selectRect.startTop;

        if (yInContainer < selectRect.startTop) {
            newTop = yInContainer;
        }



        if (this.state.showSelectRect) {
            const elements = this.state.docConfig[0].elements;
            let selectedElement = {
                ...this.state.selectedElement
            };

            elements.forEach((item, index) => {
                if (intersectRect(item.pos, this.state.selectRect)) {
                    selectedElement[item.name] = item;
                }else {
                    delete selectedElement[item.name];
                }
            })

            this.setState({
                selectRect: {
                    left: newLeft,
                    top: newTop,
                    startLeft: selectRect.startLeft,
                    startTop: selectRect.startTop,
                    width: Math.abs(xInContainer - selectRect.startLeft),
                    height: Math.abs(yInContainer - selectRect.startTop)
                },
                selectedElement: selectedElement
            })
        }
    }

    onMouseLeave = (e) => {
        this.setState({
            showSelectRect: false,
            selectRect: {
                left: 0,
                top: 0,
                startLeft: 0,
                startTop: 0,
                width: 0,
                height: 0
            }
        })
    }

    handleMultiLine = () => {
        const examineId = md5(Object.keys(this.state.selectedElement).join());
        const examineElements = {
            examine: []
        };

        const rows = {};
        //先按行分组
        Object.values(this.state.selectedElement).forEach((item, index) => {

            if (item.elmtype === 'TABLE') {
                if (!rows[item.table.row]) {
                    rows[item.table.row] = [];
                }

                rows[item.table.row].push(item.name);
            }
        });

        console.log('rows = ', rows);

        Object.values(rows).forEach((item, index) => {
            let o = {};

            item.forEach((name, index) => {
                o[name] = document.getElementById(name).value;
            });

            o = {
                ...o,
                examineType: 'MULTI_LINE',
                examineId: examineId
            }

            examineElements.examine.push(o);
        })

        console.log('examineElements = ', JSON.stringify(examineElements));
    }

    onMouseUp = (e) => {

        switch (this.props.examineWay) {
            case 'EX_SINGLE':

                break;

            case 'EX_MULTI_ELM':

                break;

            case 'EX_MULTI_LINE':
                this.handleMultiLine();
                break;

            case 'EX_SETTLEMENT':

                break;
        }

        this.setState({
            showSelectRect: false,
            selectRect: {
                left: 0,
                top: 0,
                startLeft: 0,
                startTop: 0,
                width: 0,
                height: 0
            }
        })
    }

    onInputClick = (item) => {
        const { selectedElement } = this.state;

        if (!selectedElement[item.name]) {
            selectedElement[item.name] = item;
        }else {
            delete selectedElement[item.name];
        }
    }

    render() {
        //加载失败，请检查configUrl
        if (this.state.errMsg.length > 0) {
            return (
                <div>
                    {this.state.errMsg}
                </div>
            )
        }

        //加载中
        if (this.state.docConfig.length == 0) {
            return (
                <div>
                    加载中...
                </div>
            )
        }

        const config = this.state.docConfig[this.state.copy];
        const { docConfig, fields, selectRect } = this.state;
        const { docData, docMode } = this.props;

        //展示预置数据或空白单据模式
        const renderElementAndValue = (item, index, readOnly = true) => {
            let valueOpt = {};

            if (readOnly) {
                valueOpt = {
                    readOnly: 'readonly'
                }
            }

            if (this.state.fields.hasOwnProperty(item.name)) {
                valueOpt = {
                    ...valueOpt,
                    value: this.state.fields[item.name]
                };
            }

            let highlightStyle = {};
            //答案高亮显示
            //TODO: style beautify
            if (readOnly && docData.answer) {
                const answerFound = docData.answer.find((as, index) => {
                    return as.hasOwnProperty(item.name);
                })

                if (answerFound) {
                    highlightStyle = {
                        color: '#ff0000'
                    }
                }
            }

            switch (item.type) {
                case 'INPUT':
                    return <input key={`${item.name}_${index}`}
                                id={item.name}
                                name={item.name}
                                {...valueOpt}
                                onChange={this.onInputChange}
                                style={{
                                    position: "absolute",
                                    ...item.pos,
                                    ...item.style,
                                    ...highlightStyle
                                }}
                            />
                    break;
                case 'CHECK_BOX':
                    valueOpt = {
                        ...valueOpt,
                        checked: !!valueOpt.value
                    }

                    return <input key={`${item.name}_${index}`}
                                type="checkbox"
                                id={item.name}
                                name={item.name}
                                {...valueOpt}
                                onChange={this.onCheckboxChange}
                                style={{
                                    position: "absolute",
                                    ...item.pos,
                                    ...item.style
                                }}
                            />
                    break;

                case 'SELECT':
                    return <input key={`${item.name}_${index}`}
                                id={item.name}
                                name={item.name}
                                {...valueOpt}
                                onChange={this.onSelectChange}
                                style={{
                                    position: "absolute",
                                    ...item.pos,
                                    ...item.style,
                                    ...highlightStyle
                                }}
                            />
                    break;
            }
        }

        //设置权重模式，全部元素都为input，
        const renderElementAlwaysInput = (item, index) => {

            let value = {
                value: 0
            };

            if (this.state.fields.hasOwnProperty(item.name)) {
                value = {
                    value: this.state.fields[item.name]
                };
            }

            let highlightStyle = {};

            if (this.state.selectedElement[item.name]) {
                highlightStyle = {
                    color: '#ff0000'
                }
            }

            return <input key={`${item.name}_${index}`}
                        id={item.name}
                        name={item.name}
                        {...value}
                        onClick={() => {
                            this.onInputClick(item)
                        }}
                        onChange={this.onInputChange}
                        style={{
                            position: "absolute",
                            ...item.pos,
                            ...item.style,
                            ...highlightStyle
                        }}
                    />
        }

        /**
         * 根据不同模式渲染元素们
         * TODO: style beautify
         */
        const renderElements = () => {
            let elements = config.elements;

            if (!config.elements) {
                elements = docConfig[0].elements;
            }

            const elementNodes = elements.map((item, index) => {
                //多联后面的联均为只读
                if (this.state.copy !== 0) {
                    return renderElementAndValue(item, index);
                }

                switch (this.props.docMode) {
                    case 'READ_ONLY':
                        return renderElementAndValue(item, index);
                        break;

                    case 'EDIT_ANSWER':

                        break;

                    case 'EDIT_WEIGHT':
                        return renderElementAlwaysInput(item, index);
                        break;

                    case 'EDIT_DATA':
                        return renderElementAndValue(item, index, false);
                        break;
                    //no default
                }
            })

            return elementNodes;
        }

        /**
         * 渲染分联器
         * TODO: style beautify
         */
        const renderCopy = () => {
            //如果只有一联，则不显示分联
            if (this.state.docConfig.length == 1) {
                return null;
            }

            const copyNodes = this.state.docConfig.map((item, index) => {

                return <a key={`copy_${index}`} href="#" onClick={() => {
                    this.onCopyChange(index);
                }}><br />{index+1}</a>;
            })

            return <div>
                        {copyNodes}
                    </div>;
        }

        //渲染矩形选择区域
        const renderRectangle = () => {
            if (this.state.showSelectRect) {
                return (
                    <div style={{
                        position: "absolute",
                        backgroundColor:'rgba(0,0,0,0.1)',
                        zIndex:0,
                        left: selectRect.left,
                        top: selectRect.top,
                        width: selectRect.width,
                        height: selectRect.height
                    }} />
                )
            }
        }

        let mouseEventOpt = {};

        if (docMode === 'EDIT_WEIGHT') {
            mouseEventOpt = {
                onMouseDown: this.onMouseDown,
                onMouseMove: this.onMouseMove,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            }
        }

        return (
            <div className={styles.title}
                ref={'docContainer'}
                {...mouseEventOpt}
                 style={{
                     backgroundImage: `url(${config.backgroundImage})`,
                     noRepeat: 'no-repeat',
                     width: config.width,
                     height: config.height,
                     backgroundSize: config.backgroundSize ? config.backgroundSize : 'cover',
                     ...config.style
            }}>
                <form onSubmit={this.onSubmit}>
                    {renderElements()}
                    {renderCopy()}
                    <input type="submit" value="submit" />
                </form>
                {renderRectangle()}
            </div>
        )
    }
}

PBUDocumentDemo.propTypes = {
    /**
     * 单据配置文件Url
     */
    docConfigUrl: PropTypes.string.isRequired,
    /**
     * 单据数据属性
     */
    docData: PropTypes.object,

    /**
     * 当前单据模式
     * @enum READ_ONLY 纯展示，如果存在docData，则展示docData
     * @enum EDIT_ANSWER 教师编辑答案模式
     * @enum EDIT_WEIGHT 编辑权重及考核项模式
     * @enum EDIT_DATA 预置数据模式
     * @enum
     */
    docMode: PropTypes.oneOf(["READ_ONLY", "EDIT_ANSWER", "EDIT_WEIGHT", "EDIT_DATA", ""]).isRequired,

    /**
     * 保存回调
     * @param {Number} copy 当前保存的联序号
     */
    onSave: PropTypes.func,
    /**
     * 续页回调，执行此操作时会调用onSave
     */
    onAddPage: PropTypes.func,
    /**
     * 可见联次
     * 可见联序号，用「，」分割，如'0,1,2' 则显示前三联，如'0,2' 则只显示第一联和第三联
     */
    visibleCopys: PropTypes.string,

    /**
     * 甄别方式
     * @enum EX_SINGLE 单空甄别
     * @enum EX_MULTI_ELM 多空甄别
     * @enum EX_MULTI_LINE 多行甄别
     * @enum EX_SETTLEMENT 结算甄别
     */
    examineWay: PropTypes.oneOf(["EX_SINGLE", 'EX_MULTI_ELM', 'EX_MULTI_LINE', 'EX_SETTLEMENT']),
}

PBUDocumentDemo.defaultProps = {
    docConfigUrl: '',
    docData: {},
    docMode: ''
}

export default PBUDocumentDemo;
