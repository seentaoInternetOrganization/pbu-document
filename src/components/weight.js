/**
 * @author AngusC
 * @description 单据权重展示组件
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import bgStyles from './background.css';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, DOC_TYPE } from '../constants';
import { copyToShow, basicStyleOfItem, testNumber, canChange } from './docUtils';
import { excludePropertyOfObject } from '../utils';

const DocWeight = ({ config, ratioWidth, ratioHeight, data }) => {

    const renderElements = () => {
        const elementNodes = Object.values(config[0].elements).map((item, index) => {
            const { pos } = item;
            /**
             * 忽略checkbox
             */
            if (item.type === ELEMENT.CHECK_BOX
                && !item.options) {
                return (
                    <input key={`${item.name}_${index}`}
                                type="checkbox"
                                style={basicStyleOfItem(item)}
                            />
                )
            }

            if (item.type === ELEMENT.LABEL) {
                return (
                    <span key={`readonly_${index}`}
                        style={basicStyleOfItem(item)}>
                        {item.textValue && item.textValue}
                    </span>
                )
            }

            if (!data
                || typeof data !== 'object'
                || !data.all) {
                //如果没有数据且单据类型为默认即仿真单据，则不渲染
                if (!config[0].docType
                    || config[0].docType === DOC_TYPE.DEFAULT) {
                    return
                }
            }

            if (data
                && data.all
                && data.all[item.name]) {
                return (
                    <span key={`readonly_${index}`}
                        style={{
                            ...excludePropertyOfObject(basicStyleOfItem(item), 'letterSpacing'),
                            border: `1px solid ${EXAMINE_COLOR[data.all[item.name].examineType]}`,
                            borderRadius: 2,
                            background: '#fff',
                            textAlign: 'center',
                        }}>
                        {data.all[item.name].weight}
                    </span>
                )
            }

            return (
                <div key={`${item.name}_${index}`}
                    style={basicStyleOfItem(item)}/>
            )
        });

        return elementNodes;
    }

    return (
        <DocBG className={bgStyles.container}
                ratioWidth={ratioWidth}
                ratioHeight={ratioHeight}
                config={config}>
            {renderElements()}
        </DocBG>
    );
}


DocWeight.propTypes =  {
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
}

DocWeight.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null,
}

export default DocWeight;
