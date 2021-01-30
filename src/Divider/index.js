import React from "react";
import styles from "./Divider.module.scss";

const Divider = (props) => {
    if (props.type === 'bold') {
        return (
            <img src={'/images/longDivider.svg'} className={styles.longDivider} alt=' ' />
        );
    }
    else {
        return (
            <img src={'/images/divider.png'} className={styles.divider} alt=' ' />
        );
    }

};

export default Divider;
