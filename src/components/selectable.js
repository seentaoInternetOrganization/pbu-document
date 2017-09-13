/**
 * @author AngusC
 * @description 设置权重及甄别方式
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import styles from './background.css';
import { ELEMENT, EXAMINE, EXAMINE_COLOR } from '../utils';


const Selectable = ({ config, selectedElement, examineType, ratioWidth, ratioHeight }) => {
    const renderElements = () => {
        const elementNodes = Object.values(config.elements).map((item, index) => {
            const { pos } = item;
            /**
             * 忽略checkbox
             */
            if (item.type === ELEMENT.CHECK_BOX) {
                return (
                    <input key={`${item.name}_${index}`}
                                type="checkbox"
                                style={{
                                    left: pos.left * ratioWidth,
                                    top: pos.top * ratioHeight,
                                    width: pos.width * ratioWidth,
                                    height: pos.height * ratioHeight,
                                    ...item.style
                                }}
                            />
                )
            }

            let selected = {};

            if (selectedElement[item.name]) {
                const selectedElement = selectedElement[item.name];

                selected = {
                    border: `1px solid ${EXAMINE_COLOR[selectedElement.examineType]}`,
                    borderRadius: 2
                }
            }

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
        });

        return elementNodes;
    }

    return (
        <DocBG className={classnames(styles.container, styles.left)}
                ratioWidth={ratioWidth}
                ratioHeight={ratioHeight}
                config={config}>
            {renderElements()}
        </DocBG>
    )
}

Selectable.propTypes = {
    /**
     * 当前联配置
     */
    config: PropTypes.object.isRequired,
    /**
     * 选中的元素集合
     */
    selectedElement: PropTypes.object.isRequired,
    /**
     * 横向缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 纵向缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
}

Selectable.defaultProps = {

}

export default Selectable;
