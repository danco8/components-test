import React from "react";
import styles from './AdvanceSearch.module.scss';

import Icon from "../../Icon";
import Option from './Option/index';
import Divider from '../../Divider/index';

const AdvanceSearch = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.searchBox} onClick={props.searchBoxClicked}>
                <div className={styles.IconWrapepr} onClick={props.closeAdvanceSearch}><Icon src='X' /></div>
                <input className={styles.searchBoxInput} placeholder='Type your keywords' />
            </div>
            <p className={styles.smallHeader}>Recent Searches </p>
            <div className={styles.options}>
                <Option text='Earning by items' color='Pink' />
                <Divider type='bold' />
                <Option text='This month Statements' color='Yellow' />
                <Divider type='bold' />
                <Option text='How many sales I got…' color='lightBlue' />
                <button className={styles.button}>Advance Search</button>
            </div>
        </div>
    )
};

export default AdvanceSearch;
