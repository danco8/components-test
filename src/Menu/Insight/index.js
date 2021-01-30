import React from "react";
import styles from './Insight.module.scss';
import Icon from '../../Icon/index';
import Notification from './Notification/index';

const Insight = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.IconWrapper}><Icon src={props.text} /></div>
            <p className={styles.Text}>{props.text} </p>
            <Notification text={props.notifications} />
        </div>
    );
};

export default Insight;
