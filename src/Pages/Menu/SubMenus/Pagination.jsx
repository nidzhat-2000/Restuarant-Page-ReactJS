import React from 'react';
import styles from '../Menu.module.css';
import Button from 'react-bootstrap/Button';

export default function Pagination({ data }) {
  const { setInitial, setActive, foodsLength, active } = data;
  const number = foodsLength / 6;
  let myArray = [];

  for (let i = 1; i <= number; i++) {
    myArray.push(i);
  }

  const remainder =
    foodsLength % 6 !== 0 ? myArray.push(myArray.length + 1) : null;

  const activeMaker = e => {
    setActive(e.target.value);
    setInitial((e.target.value - 1) * 6);
  };

  return (
    <section className={styles.pagination}>
      {(myArray || remainder) && (
        <article className={styles.page_nums}>
          {myArray.map((reqem, i) => {
            return (
              <Button
                variant={+active === reqem ? 'warning' : 'outline-warning'}
                key={i}
                onClick={activeMaker}
                value={reqem}
                className={styles.page_num}
                style={{
                  color: +active === reqem ? 'white' : 'rgb(134, 103, 97)',
                }}
              >
                {reqem}
              </Button>
            );
          })}
        </article>
      )}
    </section>
  );
}
