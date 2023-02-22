import React from 'react';
import '../styles/Title.css'

export const LdTitle = ({className, type = 'h2', ...props}) => {
    const localClass = new Set((className ? className.split(' ') : []));
    localClass.add('ld-title');
    return React.createElement(type, {className: Array.from(localClass).join(' '), ...props}, props.children);
}