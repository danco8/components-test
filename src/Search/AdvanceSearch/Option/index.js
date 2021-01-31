import React from "react";
import styles from "./Option.module.scss";

const Option = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.line}>
                <img src={`/images/${props.color}.svg`} alt=' ' />
                <p className={styles.Text}>{props.text} </p>
                <img className={styles.arrow} src={'/images/smallRight.svg'} alt=' ' />
            </div>

        </div>
    );
};

export default Option;
