import React from "react";
import styles from './Insight.module.scss';
import Icon from '../../Icon/index';
import NotificationIcon from '../../NotificationIcon/index';

const Insight = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.IconWrapper}><Icon src={props.text} /></div>
            <p className={styles.Text}>{props.text} </p>
            <NotificationIcon text={props.notifications} />
        </div>
    );
};

export default Insight;
