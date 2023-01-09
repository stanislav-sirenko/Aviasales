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
  status: boolean | null
  error: string | null
  showTickets: number
  isActiveButtonFilter: string | null
  all: boolean
  nonStop: boolean
  oneStop: boolean
  twoStop: boolean
  threeStop: boolean
}

const initialState: TicketState = {
  tickets: [],
  searchId: null,
  status: null,
  error: null,
  showTickets: 5,
  isActiveButtonFilter: null,
  all: true,
  nonStop: true,
  oneStop: true,
  twoStop: true,
  threeStop: true,
}

const _defaultPath = 'https://aviasales-test-api.kata.academy'

export const fetchSearchId = createAsyncThunk<string, undefined, { rejectValue: string }>(
  'tickets/fetchSearchId',
  async function (_, { rejectWithValue }) {
    const response = await fetch(`${_defaultPath}/search`)
    if (!response.ok) rejectWithValue('search id')
    const data = await response.json()
    return data.searchId as string
  }
)

export const fetchTickets = createAsyncThunk<
  Ticket[],
  undefined,
  { rejectValue: string; state: { tickets: TicketState } }
>('tickets/fetchTickets', async function (_, { getState, rejectWithValue, dispatch }) {
  const { searchId } = getState().tickets
  const response = await fetch(`${_defaultPath}/tickets?searchId=${searchId}`)
  if (response.status === 500) dispatch(fetchTickets())
  if (!response.ok) rejectWithValue('search tickets')
  const result = await response.json()
  if (!result.stop) dispatch(fetchTickets())
  return result.tickets as Ticket[]
})

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    showMoreTickets(state) {
      state.showTickets += 5
    },
    selectedRadioBtn111(state, action) {
      state.isActiveButtonFilter = action.payload
      if (state.isActiveButtonFilter === 'radio1')
        state.tickets.sort((ticket1: Ticket, ticket2: Ticket) => ticket1.price - ticket2.price)
      if (state.isActiveButtonFilter === 'radio2')
        state.tickets.sort(
          (ticket1: Ticket, ticket2: Ticket) =>
            ticket1.segments[0].duration +
            ticket1.segments[1].duration -
            (ticket2.segments[0].duration + ticket2.segments[1].duration)
        )
      if (state.isActiveButtonFilter === 'radio3')
        state.tickets.sort(
          (ticket1: Ticket, ticket2: Ticket) =>
            ticket1.segments[0].duration +
            ticket1.segments[1].duration -
            (ticket2.segments[0].duration + ticket2.segments[1].duration) +
            (ticket1.price - ticket2.price)
        )
    },

    allChecked(state, action) {
      state.all = action.payload
      if (state.all) {
        state.nonStop = true
        state.oneStop = true
        state.twoStop = true
        state.threeStop = true
        state.tickets.filter((ticket: { segments: { stops: string[] }[] }) => ticket)
      } else {
        state.nonStop = false
        state.oneStop = false
        state.twoStop = false
        state.threeStop = false
      }
    },

    nonStopChecked(state, action) {
      state.nonStop = action.payload
      if (state.nonStop && state.oneStop && state.twoStop && state.threeStop) state.all = true
      if (!state.nonStop) state.all = false
    },

    oneStopChecked(state, action) {
      state.oneStop = action.payload
      if (state.nonStop && state.oneStop && state.twoStop && state.threeStop) state.all = true
      if (!state.oneStop) state.all = false
    },

    twoStopChecked(state, action) {
      state.twoStop = action.payload
      if (state.nonStop && state.oneStop && state.twoStop && state.threeStop) state.all = true
      if (!state.twoStop) state.all = false
    },

    threeStopChecked(state, action) {
      state.threeStop = action.payload
      if (state.nonStop && state.oneStop && state.twoStop && state.threeStop) state.all = true
      if (!state.threeStop) state.all = false
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.status = true
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.status = false
        state.searchId = action.payload
        state.error = null
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = false
        state.tickets.push(...action.payload)
        state.error = null
      })
  },
})

export const {
  showMoreTickets,
  selectedRadioBtn111,
  allChecked,
  nonStopChecked,
  oneStopChecked,
  twoStopChecked,
  threeStopChecked,
} = ticketSlice.actions

export default ticketSlice.reducer
