import React from "react";
import styled, { StyledComponent } from "styled-components";

interface Props {
    type: "button" | "submit" | "reset";
    variant: string;
    className: string;
    id?: string;
    onClick?: () => void;
    children: string;
    size?: string;
}

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
    color: #fff;
    border-radius: 20px;
    width: 25rem;
    padding: 0
        ${(props) =>
            props.size === "sm"
                ? "1.1rem"
                : props.size === "md"
                ? "1.4rem"
                : props.size === "lg"
                ? "1.6rem"
                : "1.1rem"};
    height: ${(props) =>
        props.size === "sm" ? "34px" : props.size === "md" ? "37px" : props.size === "lg" ? "40px" : "6rem"};
    font-family: "inter", sans-serif;
    font-weight: 500;
    font-size: 3rem;
    border: 1px solid transparent;
    background-color: ${(props) => (props.variant === "light" ? "#f8f9fa" : "#01e7ca")};
    &:hover {
        background-color: #18fade;
    }
`;

const Button = (props: Props) => {
    const { type, variant, className, id, onClick, children, size } = props;

    return (
        <ButtonComponent type={type} className={className} id={id} variant={variant} onClick={onClick} size={size}>
            {children}
        </ButtonComponent>
    );
};

export default Button;
