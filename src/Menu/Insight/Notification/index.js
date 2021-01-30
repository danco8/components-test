import React from "react";
import styles from './Notification.module.scss';

const Notification = (props) => {
    return (
        <p className={styles.root}>{props.text} </p>
    )
};

export default Notification;
