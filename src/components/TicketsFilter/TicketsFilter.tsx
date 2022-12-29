import React from 'react'

import classes from './TicketsFilter.module.scss'

const TicketsFilter = () => {
  return (
    <div className={classes.filter}>
      <label className={classes.filter__label}>
        <input
          type="radio"
          defaultChecked
          value="Самый дешевый"
          name="choice"
          className={classes.filter__label__input}
        />
        <span className={classes.filter__label__title}>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label className={classes.filter__label}>
        <input type="radio" value="Самый быстрый" name="choice" className={classes.filter__label__input} />
        <span className={classes.filter__label__title}>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label className={classes.filter__label}>
        <input type="radio" value="Оптимальный" name="choice" className={classes.filter__label__input} />
        <span className={classes.filter__label__title}>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}

export default TicketsFilter
