/**
 * @author AngusC
 * @description 编辑权重及甄别方式
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Selectable from './selectable';
import styles from './editWeight.css';

class EditWeight extends Component {
    state = {

    }

    componentDidMount() {

    }


    render() {
        const { config, ratioWidth, ratioHeight, data } = this.props;

        //顶部操作渲染
        const renderTopHeader = () => {
            return (
                <div className={styles.sub_nav}>
                    <h2>{config.title}</h2>
                    <div className={styles.menus}>
                        <span className={styles.pre}></span>
                        <div>
                            <ul>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                                <li>日期 <span className={styles.delete}>2</span></li>
                            </ul>
                        </div>
                        <span className={styles.next}></span>
                    </div>
                    <div className={styles.btn_group}>
                        <button className={styles.clear}>清除</button>
                        <button>保存</button>
                    </div>
                </div>
            )
        }

        const renderRightContainer = () => {
            return (
                <div className={styles.right_container}>
                    <div>
                        <label htmlFor="a"><input type="radio" name="radio" id="a" /><span>单编辑框</span></label>
                        <label htmlFor="b"><input type="radio" name="radio" id="b" /><span>多编辑框</span></label>
                        <label htmlFor="c"><input type="radio" name="radio" id="c" /><span>多行集合</span></label>
                        <label htmlFor="d"><input type="radio" name="radio" id="d" /><span>合计栏</span></label>
                    </div>
                    <div className={styles.msg}>
                        <p><span>单编辑框：</span>本空填写的数据与此空的正确答案对比一致，本甄别框判对。</p>
                        <p><span>多编辑框：</span>甄别框中所有空填写的数据与正确答案对比，全部一致，本甄别框判对。</p>
                        <p><span>多行集合：</span>填写的数据没有固定顺序，行数据与正确答案行数据循环比对，本行数据一致，本行判对。</p>
                        <p><span>合计栏：</span>单页时同单编辑框，续页时，相加后甄别</p>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {renderTopHeader()}
                <div className={styles.content}>
                    <Selectable {...this.props}
                        selectedElement={{}}
                    />
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
    config: PropTypes.object.isRequired,
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
    data: PropTypes.object
}

EditWeight.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null
}
