import styles from './App.module.scss';

import Buttons from './Buttons/index';
import Inputs from './Inputs/index';
import Menu from './Menu/index';
import Search from './Search/index';
import Notification from './Notification/index';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Head}>
        <Search />
        <Notification />
      </div>
      <Inputs />
      <Buttons />
      <Menu />
    </div>
  );
}

export default App;
