import React from "react";
import styles from './NotificationIcon.module.scss';

const NotificationIcon = (props) => {
    return (
        <p className={styles.root}>{props.text} </p>
    )
};

export default NotificationIcon;
