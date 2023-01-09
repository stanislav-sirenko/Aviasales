import { useAppDispatch, useAppSelector } from '../../hook'
import { getSelectedRadioBtn } from '../../redux/ticket-slice'

import classes from './TicketsFilter.module.scss'

const TicketsFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isActiveButtonFilter } = useAppSelector((state) => state.tickets)

  return (
    <div className={classes.filter}>
      <label className={classes.filter__label}>
        <input
          type="radio"
          value="radio1"
          checked={isActiveButtonFilter === 'radio1'}
          name="choice"
          className={classes.filter__label__input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(getSelectedRadioBtn(event.target.value))}
        />
        <span className={classes.filter__label__title}>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label className={classes.filter__label}>
        <input
          type="radio"
          value="radio2"
          checked={isActiveButtonFilter === 'radio2'}
          name="choice"
          className={classes.filter__label__input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(getSelectedRadioBtn(event.target.value))}
        />
        <span className={classes.filter__label__title}>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label className={classes.filter__label}>
        <input
          type="radio"
          value="radio3"
          checked={isActiveButtonFilter === 'radio3'}
          name="choice"
          className={classes.filter__label__input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(getSelectedRadioBtn(event.target.value))}
        />
        <span className={classes.filter__label__title}>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}

export default TicketsFilter
