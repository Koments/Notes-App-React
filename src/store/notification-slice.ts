import { createSlice } from "@reduxjs/toolkit";
import { notes } from "./data";

const notifySlice = createSlice({
    name: "notify",
    initialState: {
        notes: [...notes],
    },
    reducers: {
        addNotify(state, action) {
        console.log(state, action);
        state.notes.push({
          ...action.payload.notes,
          id: state.notes.length + 1,
          archived: false,
        });
        },
        deleteNotify(state, action) {},
        changeNotify(state, action) {},
        archiveNotify(state, action) {},
    },
});

export const { addNotify, deleteNotify, changeNotify, archiveNotify } =
  notifySlice.actions;

export default notifySlice.reducer;
