/**
 * @author AngusC
 * @description 选择框组件
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * 0单位矩形对象
 * @return {Object} [description]
 */
export function zeroRect() {
    return {
        left: 0,
        top: 0,
        startLeft: 0,
        startTop: 0,
        width: 0,
        height: 0
    }
}

/**
 * 生成矩形对象
 * @param  {Number} left      [description]
 * @param  {Number} top       [description]
 * @param  {Number} startLeft [description]
 * @param  {Number} startTop  [description]
 * @param  {Number} width     [description]
 * @param  {Number} height    [description]
 * @return {Object}           [description]
 */
export function makeRect(left, top, startLeft, startTop, width, height) {
    return {
        left,
        top,
        startLeft,
        startTop,
        width,
        height
    }
}

const Rectangle = ({ rect }) => {

    return (
        <div style={{
            position: "absolute",
            backgroundColor:'rgba(0,0,0,0.1)',
            zIndex:0,
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        }} />
    )
}

export default Rectangle;

Rectangle.propTypes = {
    /**
     * 矩形对象，包括left, top, width, height
     */
    rect: PropTypes.object.isRequired
}
