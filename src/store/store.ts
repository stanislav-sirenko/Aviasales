import { configureStore } from '@reduxjs/toolkit'

import ticketReducer from './ticket-slice'

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
