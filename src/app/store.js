import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import roomReducer from '../features/room/RoomSlice.js'

export default configureStore({
  reducer: {
      counter: counterReducer,
      room: roomReducer
  },
})