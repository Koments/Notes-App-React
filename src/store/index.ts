import { configureStore } from "@reduxjs/toolkit";
import notifyReducer from './notification-slice'

export default configureStore({
  reducer: {
    notes: notifyReducer,
    archivedNotes: notifyReducer,
  },
});
