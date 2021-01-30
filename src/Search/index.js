import React, { useState } from "react";
import styles from './Search.module.scss';

import Header from '../Header/index';
import SearchBox from './SearchBox/index';
import AdvanceSearch from './AdvanceSearch/index';

const Search = () => {
    const [searchClicked, setSearchClicked] = useState(false);
    return (
        <div className={styles.root}>
            <Header text='Search' />{
                searchClicked ?
                    <AdvanceSearch closeAdvanceSearch={() => setSearchClicked(false)} />
                    :
                    <SearchBox searchBoxClicked={() => setSearchClicked(true)} />
            }
        </div>
    )
};

export default Search;
