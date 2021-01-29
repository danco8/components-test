import React from "react";
import styles from "./Icon.module.scss";

const Icon = (props) => {
    console.log(`/images/${props.src}.png`);
    return (<img src={`/images/${props.src}.png`} className={styles.img} alt=' ' />);
};

export default Icon;
