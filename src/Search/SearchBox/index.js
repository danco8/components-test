import React from "react";
import styles from './SearchBox.module.scss';

import Icon from "../../Icon";

const SearchBox = (props) => {
    return (
        <button className={styles.searchBox} onClick={props.searchBoxClicked}>
            <Icon src='Search' />
            <p className={styles.searchBoxText}>Search</p>
        </button>
    )
};

export default SearchBox;
