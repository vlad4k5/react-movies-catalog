import React from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  return <div className={styles.searchWrapper}>
    <input className={styles.searchInput} type='text' placeholder='Найти фильм, сериал, персону...' />
  </div>
  
}

export default SearchInput