import React from "react";
import styles from "./Divider.module.scss";

const Divider = (props) => {
    return (
        <img src={'/images/divider.png'} className={styles.divider} alt=' ' />
    );
};

export default Divider;
