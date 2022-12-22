import React from 'react'

import classes from './NumberOfTransfers.module.scss'

const NumberOfTransfers = () => {
  return (
    <div className={classes['transfers-count']}>
      <h2 className={classes['transfers-count__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <label className={classes['transfers-count__label']}>
        <input type="checkbox" className={classes['transfers-count__checkbox']} value="Все" />
        <span className={classes['transfers-count__label__title']}>Все</span>
      </label>

      <div className={classes['transfers-count__group']}>
        <label className={classes['transfers-count__label']}>
          <input type="checkbox" className={classes['transfers-count__checkbox']} value="Без пересадок" />
          <span className={classes['transfers-count__label__title']}>Без пересадок</span>
        </label>
        <label className={classes['transfers-count__label']}>
          <input type="checkbox" className={classes['transfers-count__checkbox']} value="1 пересадка" />
          <span className={classes['transfers-count__label__title']}>1 пересадка</span>
        </label>
        <label className={classes['transfers-count__label']}>
          <input type="checkbox" className={classes['transfers-count__checkbox']} value="2 пересадки" />
          <span className={classes['transfers-count__label__title']}>2 пересадки</span>
        </label>
        <label className={classes['transfers-count__label']}>
          <input type="checkbox" className={classes['transfers-count__checkbox']} value="3 пересадки" />
          <span className={classes['transfers-count__label__title']}>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}
export default NumberOfTransfers
