import React from 'react';

import Select, {components} from "react-select";
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';

export const LdSelect = ({className, placeholder = '', maxSelected = false, ...props}) => {
    const localClass = new Set((className ? className.split(' ') : []));
    localClass.add('ld-select'); 

    

    const customStyles = {
        container: (styles) => ({...styles, minHeight: '50px'}),
        singleValue: (styles) => ({...styles, top: '50%', padding: '0px 8px'}),
        input: (styles) => ({...styles, top: '50%', padding: '0px 8px'}),
        menu: (styles) => ({
            ...styles,
            border: "1px solid #003057",
            borderRadius: "12px",
            padding: '5px 0px',
        }),
        menuList: (styles) => ({...styles, maxHeight: '164px'}),
        option: (styles, state) => ({
            ...styles,
            cursor: 'pointer',
            padding: '4px 8px',
            background: state.isSelected ? '#003057' : '#FFF',
            color: state.isSelected ? '#FFF' : '#424242',
            "&:hover, &:focus, &:active": {
                background: '#204d99',
                color: '#FFF',
            }
        }),
        control: (styles, state) => ({
            ...styles,
            minHeight: '40px',
            borderRadius: "12px",
            border: state.menuIsOpen ? "1px solid #003057" : "1px solid #ced4da",
            boxShadow: 'none',
            cursor: 'pointer',
            "&:hover, &:focus, &:active": {
                border: "1px solid #003057",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }
        }),
        multiValue: (styles) => ({
            ...styles,
            borderRadius: '12px',
            backgroundColor: '#003057'
        }),
        multiValueLabel: (styles) => ({
            ...styles,
            color: '#FFF'
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            color: '#FFF',
            "&:hover, &:focus, &:active": {
                backgroundColor: '#204d99',
                borderRadius: '12px',
                color: '#FFF',
            }
        })
    };

    const DropdownIndicator = (_props) => (
        <components.DropdownIndicator {..._props}>
            {_props.isFocused ? <ChevronUp/> : <ChevronDown/>}
        </components.DropdownIndicator>
    );

    let componentsOpts = {DropdownIndicator, IndicatorSeparator: null};

    if (maxSelected) {
        const Menu = props => {
            const optionSelectedLength = props.getValue().length || 0;
            return <components.Menu {...props}>
                {optionSelectedLength < maxSelected ? (props.children) : (
                    <div className='px-3'>{props.maxSelectedPlaceholder || 'No es posible seleccionar más elementos.'}</div>
                )}
            </components.Menu>;
        };
        componentsOpts = {...components, Menu};
    }

    return <Select
        className={Array.from(localClass).join(' ')}
        placeholder={placeholder}
        styles={customStyles}
        components={componentsOpts}
        noOptionsMessage={() => "No hay resultados"}
        {...props}
    />;
}