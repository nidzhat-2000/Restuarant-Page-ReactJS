import React from 'react';
import styles from '../Menu.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { linkIssuesFixer } from '../../../utils/exporter';

export default function UpperLinks({ links: { mainMenu, subMenu } }) {
  const navigate = useNavigate();

  return (
    <section className={styles.sublinks}>
      <ul className={styles.sublinks_ul}>
        <li
          onClick={() =>
            navigate('/', {
              replace: 'true',
            })
          }
        >
          Home >
        </li>
        <li>
          <Link to={'/menu/' + mainMenu}>{linkIssuesFixer(mainMenu)} ></Link>
        </li>

        <li>
          <span style={{ cursor: 'default' }}>
            #{linkIssuesFixer(subMenu)}{' '}
          </span>
        </li>
      </ul>
    </section>
  );
}
