// import React from 'react'
import logo from '../images/logo.png'

import classes from './App.module.scss'
import NumberOfTransfers from './NumberOfTransfers/NumberOfTransfers'
import TicketsFilter from './TicketsFilter/TicketsFilter'
import TicketsList from './TicketsList/TicketsList'

const App = () => {
  return (
    <section className={classes.app}>
      <img src={logo} alt="aviaslaves" className={classes.app__logo}></img>
      <div className={classes.wrapper}>
        <NumberOfTransfers />
        <div className={classes.content}>
          <TicketsFilter />
          <TicketsList />
        </div>
      </div>
    </section>
  )
}

export default App
