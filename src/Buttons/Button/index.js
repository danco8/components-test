import React from "react";

import styles from "./Button.module.scss";

import Icon from '../../Icon/index';

const Button = (props) => {
    const classNames = {
        small: styles.smallButton,
        medium: styles.mediumButton,
        large: styles.largeButton,
        light: styles.lightButton,
        dark: styles.darkButton
    }
    return (<button className={classNames[props.size] + ' ' + classNames[props.theme]} > <Icon src={props.Icon} /> <p className={styles.buttonText}>{props.text}</p></button>);
};

export default Button;
