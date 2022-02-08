import styles from './App.module.scss'
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentWrapper}>
        
      </div>
    </div>
  );
}

export default App;
