import styles from './App.module.scss';

import Buttons from './Buttons/index';
import Input from './Input/index';
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
      <Input />
      <Buttons />
      <Menu />
    </div>
  );
}

export default App;
