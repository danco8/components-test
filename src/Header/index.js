import React from "react";

import styles from "./Header.module.scss";

const Header = (props) => {
    return (
        <div >
            <p className={styles.header}>{props.text} </p>
            <div className={styles.underline}> </div>
        </div>
    );
};

export default Header;
