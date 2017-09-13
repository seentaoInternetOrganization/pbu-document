/**
 * @author AngusC
 * @description 只读单据展示组件
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import bgStyles from './background.css';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../utils';

const DocReadOnly = ({ config, ratioWidth, ratioHeight, data }) => {

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

            if (data == null) {
                return;
            }

            if (data.all[item.name]) {
                return (
                    <span key={`readonly_${index}`}
                        style={{
                            left: pos.left * ratioWidth,
                            top: pos.top * ratioHeight,
                            width: pos.width * ratioWidth,
                            height: pos.height * ratioHeight,
                            border: `1px solid ${EXAMINE_COLOR[data.all[item.name].examineType]}`,
                            borderRadius: 2,
                            background: '#fff',
                            ...item.style
                        }}>
                        {data.all[item.name].weight}
                    </span>
                )
            }

            return null;
        });

        return elementNodes;
    }

    return (
        <DocBG className={bgStyles.container}
                ratioWidth={ratioWidth}
                ratioHeight={ratioHeight}
                config={config}
                mode={MODE.PREVIEW}>
            {renderElements()}
        </DocBG>
    );
}


DocReadOnly.propTypes =  {
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

DocReadOnly.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null
}

export default DocReadOnly;
