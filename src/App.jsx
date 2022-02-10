import styles from './App.module.scss'
import SearchInput from './common/SearchInput/SearchInput';
import ToggleSwitcher from './common/ToggleSwitcher/ToggleSwitcher';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentWrapper}>
        <SearchInput />
        <div className={styles.pop}>
          <span>Что популярно</span>
          <ToggleSwitcher 
          name="popular"
          labels={["По ТВ", "В кинотеатрах"]}
        />
        </div>
        
      </div>
    </div>
  );
}

export default App;
