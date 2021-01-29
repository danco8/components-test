import React from "react";
import styles from "./Input.module.scss";


const Input = (props) => {
    const classNames = {
        underline: styles.underlineInput,
        withBackground: styles.withBackgroundInput,
        outlined: styles.outlinedInput
    }
    // switch (props.type) {
    //     case 'underline': return <input placeholder={props.placeholder} className={classNames[props.type]} />
    //     case 'withBackground': return
    //         <div>
    //             <input placeholder={props.placeholder} className={classNames[props.type]} />
    //             <label>{props.label} </label>
    //         </div>
    //     default: return <input placeholder={props.placeholder} className={classNames[props.type]} />
    // }
    if (props.type === 'withBackground') {
        return (
            <div className={styles.inputLabelWrapper}>
                <label className={styles.label}>{props.label} </label>
                <input placeholder={props.placeholder} className={classNames[props.type]} />
            </div>
        )
    }
    if (props.type === 'outlined') {
        return (
            <div className={styles.inputLabelWrapper}>
                <label className={styles.label}>{props.label} </label>
                <input placeholder={props.placeholder} className={classNames[props.type]} />
            </div>
        )
    }
    else {
        return <input placeholder={props.placeholder} className={classNames[props.type]} />;
    }
};

export default Input;
