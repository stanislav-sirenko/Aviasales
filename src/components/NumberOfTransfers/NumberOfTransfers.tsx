import { useAppDispatch, useAppSelector } from '../../assets/hooks/hooksByTS'
import { allChecked, nonStopChecked, oneStopChecked, twoStopChecked, threeStopChecked } from '../../store/ticket-slice'

import classes from './NumberOfTransfers.module.scss'

const NumberOfTransfers = () => {
  const dispatch = useAppDispatch()
  const { all, nonStop, oneStop, twoStop, threeStop } = useAppSelector((state) => state.tickets)
  return (
    <div className={classes['transfers-count']}>
      <h2 className={classes['transfers-count__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <label className={classes['transfers-count__label']}>
        <input
          type="checkbox"
          className={classes['transfers-count__checkbox']}
          value="all"
          checked={all}
          onChange={() => dispatch(allChecked(!all))}
        />
        <span className={classes['transfers-count__label__title']}>Все</span>
      </label>

      <div className={classes['transfers-count__group']}>
        <label className={classes['transfers-count__label']}>
          <input
            type="checkbox"
            className={classes['transfers-count__checkbox']}
            value="nonStop"
            checked={nonStop}
            onChange={() => dispatch(nonStopChecked(!nonStop))}
          />
          <span className={classes['transfers-count__label__title']}>Без пересадок</span>
        </label>
        <label className={classes['transfers-count__label']}>
          <input
            type="checkbox"
            className={classes['transfers-count__checkbox']}
            value="oneStop"
            checked={oneStop}
            onChange={() => dispatch(oneStopChecked(!oneStop))}
          />
          <span className={classes['transfers-count__label__title']}>1 пересадка</span>
        </label>
        <label className={classes['transfers-count__label']}>
          <input
            type="checkbox"
            className={classes['transfers-count__checkbox']}
            value="twoStop"
            checked={twoStop}
            onChange={() => dispatch(twoStopChecked(!twoStop))}
          />
          <span className={classes['transfers-count__label__title']}>2 пересадки</span>
        </label>
        <label className={classes['transfers-count__label']}>
          <input
            type="checkbox"
            className={classes['transfers-count__checkbox']}
            value="threeStop"
            checked={threeStop}
            onChange={() => dispatch(threeStopChecked(!threeStop))}
          />
          <span className={classes['transfers-count__label__title']}>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}
export default NumberOfTransfers
