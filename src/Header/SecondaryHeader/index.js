import React from "react";

import styles from "./SecondaryHeader.module";

const SecondaryHeader = (props) => {
    return (
        <div >
            <p className={styles.header}>{props.text} </p>
            <div className={styles.underline}> </div>
        </div>
    );
};

export default SecondaryHeader;
