import TicketCard from '../TicketCard/TicketCard'
import { useAppSelector, useAppDispatch } from '../../hook'
import { showMoreTickets } from '../../redux/ticket-slice'
import NoTicketsFound from '../NoTicketsFound/NoTicketsFound'

import classes from './TicketsList.module.scss'

const TicketsList: React.FC = () => {
  interface Ticket {
    price: number
    carrier: string
    segments: [
      {
        origin: string
        destination: string
        date: string
        stops: string[]
        duration: number
      },
      {
        origin: string
        destination: string
        date: string
        stops: string[]
        duration: number
      }
    ]
  }

  const { tickets, showTickets, all, nonStop, oneStop, twoStop, threeStop } = useAppSelector((state) => state.tickets)
  const dispatch = useAppDispatch()
  const getCheckAllOff = !all && !nonStop && !oneStop && !twoStop && !threeStop

  const getFilterTicket = (
    tickets: Ticket[],
    all: boolean,
    nonStop: boolean,
    oneStop: boolean,
    twoStop: boolean,
    threeStop: boolean
  ) => {
    return tickets.filter((ticket: { segments: { stops: string[] }[] }) => {
      all && ticket
      if (nonStop && (!ticket.segments[0].stops.length || !ticket.segments[1].stops.length)) return true
      if (oneStop && (ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1)) return true
      if (twoStop && (ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2)) return true
      if (threeStop && (ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3)) return true
      return false
    })
  }

  return (
    <>
      {getCheckAllOff ? (
        <NoTicketsFound />
      ) : (
        getFilterTicket(tickets, all, nonStop, oneStop, twoStop, threeStop)
          .slice(0, showTickets)
          .map((ticket, index) => {
            return (
              <TicketCard
                key={index}
                price={ticket.price}
                imgCode={ticket.carrier}
                forward={ticket.segments[0]}
                backward={ticket.segments[1]}
              />
            )
          })
      )}
      {getFilterTicket(tickets, all, nonStop, oneStop, twoStop, threeStop).length >= 5 && (
        <button className={classes['show-more']} onClick={() => dispatch(showMoreTickets())}>
          Показать еще 5 билетов!
        </button>
      )}
    </>
  )
}

export default TicketsList
