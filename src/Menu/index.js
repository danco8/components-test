import React from "react";
import styles from "./Menu.module.scss";

import Header from '../Header/index';
import Logo from './Logo/index';
import NavigationItem from './NavigationItem/index';
import Insight from './Insight/index';

const Menu = () => {
    return (
        <div className={styles.root}>
            <Header text='Menu' />
            <div className={styles.menu} >
                <div className={styles.logoWrapper}><Logo /></div>
                <NavigationItem text='Dashboard' />
                <NavigationItem text='Inventory' />
                <NavigationItem text='Affiliates' />
                <NavigationItem text='Orders' />
                <NavigationItem text='Customers' />
                <NavigationItem text='Website' />
                <NavigationItem text='Marketing' />
                <NavigationItem text='Admin' />
                <div className={styles.insights}>
                    <p className={styles.insightsHeader}>Insights </p>
                    <Insight text='Inbox' notifications='18' />
                    <Insight text='Notifications' notifications='2' />
                </div>
            </div>
        </div>
    );
};

export default Menu;
