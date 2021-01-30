import React from "react";
import styles from './Card.module.scss';


const Card = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.iconContainer}>
                <img src={'/images/notificateBackground.svg'} className={styles.iconBackground} alt=' ' />
                <img src={`/images/${props.regularContent.split(" ").join("")}.svg`} className={styles.smallIcon} alt=' ' />
            </div>
            <div className={styles.notification}>
                <div className={styles.headerContainer}> <p className={styles.header}>{props.header} </p> <p className={styles.time}> {props.time}</p></div>
                <div className={styles.contentContainer}> <p className={styles.regularCotnent}>{props.regularContent}  </p> <p className={styles.linkedContent}>Collab Design </p></div>
            </div>

        </div>
    )
};

export default Card;
