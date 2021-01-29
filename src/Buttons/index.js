import React from "react";
import styles from "./Buttons.module.scss";

import Header from '../Header/index';
import Button from './Button/index';

const Buttons = () => {
    return (
        <div className={styles.root}>
            <Header text='Buttons' ></Header>
            <div className={styles.buttonsContainer} >
                <div className={styles.buttonsLine}>
                    <Button size='large' theme='dark' text='Add Product' Icon='Plus' />
                    <Button size='small' theme='dark' text='Go' Icon='Plus' />
                    <Button size='large' theme='dark' text='Add More' Icon='Plus' />
                </div>
                <div className={styles.buttonsLine}>
                    <Button size='large' theme='light' text='Channel Listing' Icon='Vector' />
                    <Button size='large' theme='light' text='More Options' Icon='Group' />
                    <Button size='large' theme='light' text='1 Selected' Icon='Uncheck' />
                </div>

            </div>
        </div>
    );
};

export default Buttons;
