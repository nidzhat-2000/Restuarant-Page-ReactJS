import React from 'react';
import styles from './Footer.module.css';

export default function Creater() {
  return (
    <div className={styles.creator}>
      <div className={styles.creator_cont}>
        <span>Designed by &copy; Nijat Niyazov in 2023</span>
        <a
          className={styles.git_link}
          href="https://github.com/nijat-niyazov"
          target="_blank"
        >
          github.com/nijat-niyazov
        </a>
      </div>
    </div>
  );
}
