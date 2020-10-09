import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
    const { fieldName, registerField } = useField(name!);
    const inputRef = useRef(null);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <>
            {Icon && <Icon size={20} color="#232129" />}
            <Container ref={inputRef} {...rest} />
        </>
    );
};

export default Input;
