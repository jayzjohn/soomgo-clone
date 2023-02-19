import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface Props {
    type: 'button' | 'submit' | 'reset';
    variant: string;
    className: string;
    id?: string;
    onClick?: () => void;
    children: string;
    size: string;
}

const Button = (props: Props) => {
    const { type, variant, className, id, onClick, children, size } = props;

    const ButtonComponent = styled.button<Props>`
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border-radius: 0.3rem;
        padding: 0
            ${(props) =>
                props.size === 'sm'
                    ? '1.1rem'
                    : props.size === 'md'
                    ? '1.4rem'
                    : props.size === 'lg'
                    ? '1.6rem'
                    : '1.1rem'};
        height: ${(props) =>
            props.size === 'sm' ? '34px' : props.size === 'md' ? '37px' : props.size === 'lg' ? '40px' : '34px'};
        font-family: 'inter', sans-serif;
        font-weight: 500;
        border: 1px solid transparent;
        background-color: ${(props) => (props.variant === 'light' ? '#f8f9fa' : '#1AE5CC')};
        &:hover {
            background-color: #18fade;
        }
    `;

    return (
        <ButtonComponent type={type} className={className} id={id} variant={variant} onClick={onClick} size={size}>
            {children}
        </ButtonComponent>
    );
};

export default Button;
