import { minutesToHours, minutesToMilliseconds, format } from 'date-fns'

import { ICardInfoTicket } from '../../types'

import classes from './TicketCard.module.scss'

interface TicketCardProps {
  price: number
  imgCode: string
  forward: ICardInfoTicket
  backward: ICardInfoTicket
}

const TicketCard: React.FC<TicketCardProps> = ({ price, imgCode, forward, backward }) => {
  const stopsWord = (length: number): string | undefined => {
    if (length === 0) return 'БЕЗ ПЕРЕСАДОК'
    if (length === 1) return '1 ПЕРЕСАДКА'
    if (length > 1 && length < 5) return `${length} ПЕРЕСАДКИ`
    if (length > 1) return `${length} ПЕРЕСАДОК`
  }

  const getTimeFromMins = (min: number): string => {
    const hours = minutesToHours(min)
    const minutes = min % 60
    return `${hours} ч ${minutes} м`
  }

  const flightTimeCalculation = (departureTime: string, flightTimeToMin: number): string => {
    const dateA = new Date(departureTime)
    const departureTimeMsec = new Date(departureTime).getTime()
    const dateB = departureTimeMsec + minutesToMilliseconds(flightTimeToMin)
    return `${format(dateA, 'HH:mm')} - ${format(dateB, 'HH:mm')}`
  }

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__essentials}>
        <span className={classes.ticket__essentials__price}>{new Intl.NumberFormat().format(price)} ₽</span>
        <img className={classes.ticket__essentials__logo} src={`http://pics.avs.io/99/36/${imgCode}.png`} alt="logo" />
      </div>
      <div className={classes.ticket__data}>
        <div className={classes.ticket__data__flight}>
          <span className={classes.ticket__data__flight__path}>
            {forward.origin} - {forward.destination}
          </span>
          <span className={classes.ticket__data__flight__time}>
            {flightTimeCalculation(forward.date, forward.duration)}
          </span>
        </div>
        <div className={classes.ticket__data__duration}>
          <span className={classes.ticket__data__duration__inscription}>В ПУТИ</span>
          <span className={classes.ticket__data__duration__length}>{getTimeFromMins(forward.duration)}</span>
        </div>
        <div className={classes.ticket__data__transit}>
          <span className={classes.ticket__data__transit__count}>{stopsWord(forward.stops.length)}</span>
          <span className={classes.ticket__data__transit__location}>{forward.stops.join(', ')}</span>
        </div>
      </div>
      <div className={classes.ticket__data}>
        <div className={classes.ticket__data__flight}>
          <span className={classes.ticket__data__flight__path}>
            {backward.origin} - {backward.destination}
          </span>
          <span className={classes.ticket__data__flight__time}>
            {flightTimeCalculation(backward.date, backward.duration)}
          </span>
        </div>
        <div className={classes.ticket__data__duration}>
          <span className={classes.ticket__data__duration__inscription}>В ПУТИ</span>
          <span className={classes.ticket__data__duration__length}>{getTimeFromMins(backward.duration)}</span>
        </div>
        <div className={classes.ticket__data__transit}>
          <span className={classes.ticket__data__transit__count}>{stopsWord(backward.stops.length)}</span>
          <span className={classes.ticket__data__transit__location}>{backward.stops.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
