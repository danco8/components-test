import React from "react";
import styles from "./Input.module.scss";
import Header from '../Header/index';

const Inputs = () => {
    return (
        <div className={styles.root}>
            <Header text='Input' />
            <div className={styles.inputLabelWrapper}>
                <label className={styles.label}>Your Full Name </label>
                <input placeholder='Name' type='withBackground' label='Your Full Name' className={styles.input} />
            </div>
        </div>
    );
};

export default Inputs;
