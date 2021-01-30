import React from "react";
import styles from './BellIcon.module.scss';

import NotificationIcon from '../../NotificationIcon/index';

const BellIcon = (props) => {
    const img = props.clicked ? 'whiteBell' : 'bell';
    const className = props.clicked ? styles.clickedBell : styles.bell;

    return (
        <div className={styles.iconContainer} onClick={props.openNotifications} >
            <div className={className}><img className={styles.image} src={`/images/${img}.svg`} alt=' ' /></div>
            <NotificationIcon text='5' />
        </div>
    )
};

export default BellIcon;
