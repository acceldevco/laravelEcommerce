import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/reduxStore'
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})