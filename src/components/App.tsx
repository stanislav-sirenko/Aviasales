import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hook'
import { fetchSearchId, fetchTickets } from '../redux/ticket-slice'
import logo from '../images/logo.png'

import classes from './App.module.scss'
import NumberOfTransfers from './NumberOfTransfers/NumberOfTransfers'
import TicketsFilter from './TicketsFilter/TicketsFilter'
import TicketsList from './TicketsList/TicketsList'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const searchId = useAppSelector((state) => state.tickets.searchId)
  const { status, error } = useAppSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  useEffect(() => {
    if (searchId) dispatch(fetchTickets())
  }, [searchId])

  return (
    <section className={classes.app}>
      <img src={logo} alt="aviaslaves" className={classes.app__logo}></img>
      <div className={classes.wrapper}>
        <NumberOfTransfers />
        <div className={classes.content}>
          <TicketsFilter />
          {status === 'loading' && <h2>Loading...</h2>}
          {error && <h2>Server Error: {error}!</h2>}
          <TicketsList />
        </div>
      </div>
    </section>
  )
}

export default App
