import React from "react";
import styles from "./Icon.module.scss";

const Icon = (props) => {
    return (<img src={`/images/${props.src}.png`} className={styles.img} alt=' ' />);
};

export default Icon;
