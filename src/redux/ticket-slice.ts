import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

interface TicketState {
  tickets: Ticket[]
  searchId: string | null
  status: string | null
  error: string | null
}

const initialState: TicketState = {
  tickets: [],
  searchId: null,
  status: null,
  error: null,
}

const _defaultPath = 'https://aviasales-test-api.kata.academy'

export const fetchSearchId = createAsyncThunk<string, undefined, { rejectValue: string }>(
  'tickets/fetchSearchId',
  async function (_, { rejectWithValue }) {
    // try {
    const response = await fetch(`${_defaultPath}/search`)
    if (!response.ok) rejectWithValue('search id') //throw new Error('search id')
    const data = await response.json()
    return data.searchId as string
    // } catch (error) {
    //   return rejectWithValue(error.message)
    // }
  }
)

export const fetchTickets = createAsyncThunk<
  Ticket[],
  undefined,
  { rejectValue: string; state: { tickets: TicketState } }
>('tickets/fetchTickets', async function (_, { getState, rejectWithValue }) {
  // try {
  const { searchId } = getState().tickets
  const response = await fetch(`${_defaultPath}/tickets?searchId=${searchId}`)
  if (!response.ok) rejectWithValue('search tickets') //throw new Error('search tickets')
  return (await response.json()).tickets as Ticket[]
  // } catch (error) {
  //   return rejectWithValue(error.message)
  // }
})

// const setError = (state, action) => {
//   state.status = 'rejected'
//   state.error = action.payload
// }

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    // addSearchId(state, action) {
    //   console.log(state)
    //   console.log(action)
    //   state.searchId.push({
    //     id: fetchSearchId,
    //   })
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.searchId = action.payload
        state.error = null
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.tickets = action.payload
        state.error = null
      })
  },

  // {
  //   [fetchSearchId.pending]: (state) => {
  //     state.status = 'loading'
  //     state.error = null
  //   },
  //   [fetchSearchId.fulfilled]: (state, action) => {
  //     state.status = 'resolved'
  //     state.searchId = action.payload.searchId
  //     state.error = null
  //   },
  //   [fetchSearchId.rejected]: setError,
  //   [fetchTickets.pending]: (state) => {
  //     state.status = 'loading'
  //     state.error = null
  //   },
  //   [fetchTickets.fulfilled]: (state, action) => {
  //     state.status = 'resolved'
  //     state.tickets = action.payload.tickets
  //     state.error = null
  //   },
  //   [fetchTickets.rejected]: setError,
  // },
})

// export const { addSearchId } = ticketSlice.action
export default ticketSlice.reducer
