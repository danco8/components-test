import React from "react";
import styles from './Notifications.module.scss';

import BellIcon from '../BellIcon/index';
import Card from './Card/index';

const Notifications = (props) => {
    return (
        <div className={styles.root}>
            <BellIcon clicked={true} />
            <div className={styles.recents}>
                <p className={styles.smallHeader}>Recent Notification </p>
                <div className={styles.cards}>
                    <Card header='New Order' time='8h' regularContent='Commented on' />
                    <Card header='Glenn Greer' time='12h' regularContent='Commented on' />
                    <Card header='Sarah Saunders' time='16h' regularContent='Commented on' />
                    <Card header='Sarah Saunders' time='21h' regularContent='Just pushaded' />
                    <Card header='Sarah Saunders' time='22h' regularContent='Sent you a message 📪 ' />
                    <Card header='Sarah Saunders' time='22h' regularContent='Liked' />
                </div>
                <button className={styles.button}> See all incoming activity</button>
            </div>
        </div>
    )
};

export default Notifications;
