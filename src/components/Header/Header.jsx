import React from 'react';
import styles from './Header.module.scss'
import logoImg from '../../assets/img/logo.svg'
import bellImg from '../../assets/img/bell.svg'
import plusImg from '../../assets/img/plus.svg'
import searchImg from '../../assets/img/search.svg'

const Header = () => {
  return <div className={styles.headerWrapper}>
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <img className={styles.logoImg} src={logoImg} alt='TMDB'/>
        <nav>
          <ul>
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </nav>
      </div>

      <ul className={styles.primary}>
        <li><img src={plusImg} alt='Add'/></li>
        <li><div className={styles.language}>EN</div></li>
        <li><img src={bellImg} alt='Notifications'/></li>
        <li>Login</li>
        <li><img className={styles.searchImg} src={searchImg} alt='Search'/></li>
      </ul>
    </header>
  </div>
};

export default Header
