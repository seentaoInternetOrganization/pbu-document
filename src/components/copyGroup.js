/**
 * @author AngusC
 * @description 联次按钮
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import isEmpty from 'validator/lib/isEmpty';

const CopyGroup = ({ visibleSheet, onCopyChange, className, selectedClsName, currentCopy }) => {

    const copyNodes = () => {
        if (!visibleSheet) {
            return null;
        }

        const copyNodes = visibleSheet.split(',')
        .map((copy, index) => {
            if (copy === '0'
                || !copy
                || isEmpty(copy)) {
                return
            }

            const isCurrentCopy = (index === currentCopy)

            return (
                <button key={index}
                    className={classnames('', { [selectedClsName]: isCurrentCopy})}
                    type='ghost'
                    onClick={e => onCopyChange(index)}
                    >{isCurrentCopy ? `第${index+1}联` : `${index+1}`}</button>
            )
        })

        return copyNodes
    }

    return (
        <div className={className}>
            {copyNodes()}
        </div>
    )
}

export default CopyGroup

CopyGroup.propTypes = {
    /**
     * 可见联次字符串，以逗号','分割
     */
    visibleSheet: PropTypes.string,
    /**
     * 联次发生
     */
    onCopyChange: PropTypes.func,
    /**
     * 联次样式
     */
    className: PropTypes.string,
    /**
     * 选中后的样式
     */
    selectedClsName: PropTypes.string,
    /**
     * 当前联
     * @type {[type]}
     */
    currentCopy: PropTypes.number,
}

CopyGroup.defaultProps = {
    currentCopy: 0,
}
