import React, { useState } from "react";
import styles from './Notification.module.scss';

import Header from '../Header/index';
import Notifications from './Notifications/index';
import BellIcon from './BellIcon/index';

const Notification = (props) => {
    const [bellClicked, setBellClicked] = useState(false);
    return (
        <div className={styles.root}>
            <Header text='Notification' />
            {bellClicked ? <Notifications /> : <BellIcon clicked={bellClicked} openNotifications={() => setBellClicked(true)} />}
        </div>
    )
};

export default Notification;
