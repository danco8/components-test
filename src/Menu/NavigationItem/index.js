import React from "react";
import styles from "./NavigationItem.module.scss";
import Icon from '../../Icon/index';
import Divider from './Divider/index';

const NavigationItem = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.menuLine}>
                <div className={styles.IconWrapper}><Icon src={props.text} /></div>
                <p className={styles.Text}>{props.text} </p>
                <Icon src='ActionIcon' />
            </div>
            <Divider />
        </div>
    );
};

export default NavigationItem;
