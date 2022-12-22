import React from 'react'

import S7 from '../../images/S7-Logo.svg'

import classes from './TicketsList.module.scss'

const TicketsList = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__essentials}>
        <span className={classes.ticket__essentials__price}>13 400 ₽</span>
        <img className={classes.ticket__essentials__logo} src={S7} alt="logo" />
      </div>
      <div className={classes.ticket__data}>
        <div className={classes.ticket__data__flight}>
          <span className={classes.ticket__data__flight__path}>MOW - HKT</span>
          <span className={classes.ticket__data__flight__time}>10:45 - 08:00</span>
        </div>
        <div className={classes.ticket__data__duration}>
          <span className={classes.ticket__data__duration__inscription}>В ПУТИ</span>
          <span className={classes.ticket__data__duration__length}>21ч 15м</span>
        </div>
        <div className={classes.ticket__data__transit}>
          <span className={classes.ticket__data__transit__count}>2 ПЕРЕСАДКИ</span>
          <span className={classes.ticket__data__transit__location}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes.ticket__data}>
        <div className={classes.ticket__data__flight}>
          <span className={classes.ticket__data__flight__path}>MOW - HKT</span>
          <span className={classes.ticket__data__flight__time}>11:20 - 00:50</span>
        </div>
        <div className={classes.ticket__data__duration}>
          <span className={classes.ticket__data__duration__inscription}>В ПУТИ</span>
          <span className={classes.ticket__data__duration__length}>13ч 30м</span>
        </div>
        <div className={classes.ticket__data__transit}>
          <span className={classes.ticket__data__transit__count}>2 ПЕРЕСАДКИ</span>
          <span className={classes.ticket__data__transit__location}>HKG</span>
        </div>
      </div>
    </div>
  )
}

export default TicketsList
