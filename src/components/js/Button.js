import React from 'react'

import {Button} from "react-bootstrap";

import '../styles/Button.css'

export const LdButton = ({className, variant = 'primary', ...props}) => {
    const localClass = new Set((className ? className.split(' ') : []));
    localClass.add('ld-button');
    return( <Button className={Array.from(localClass).join(' ')} variant={variant} {...props}>{props.children}</Button>
)};