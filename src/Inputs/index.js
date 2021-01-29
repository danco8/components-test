import React from "react";
import styles from "./Inputs.module.scss";

import Header from '../Header/index';
import Input from './Input/index';

const Inputs = () => {
    return (
        <div className={styles.root}>
            <Header text='Input' />
            <div className={styles.inputsContainer}>

                <div className={styles.inputsLine}>
                    <Input placeholder='Normal' type='underline' />
                    <Input placeholder='Click on' type='underline' />
                </div>
                <div className={styles.inputsLine}>
                    <Input placeholder='Name' type='withBackground' label='Your Full Name' />
                    <Input placeholder='Name' type='outlined' label='Your Full Name' />
                </div>
            </div>
        </div>
    );
};

export default Inputs;
