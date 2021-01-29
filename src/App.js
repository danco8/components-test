import styles from './App.module.scss';

import Buttons from './Buttons/index';
import Inputs from './Inputs/index';

function App() {
  return (
    <div className={styles.App}>
      <Inputs />
      <Buttons />
    </div>
  );
}

export default App;
