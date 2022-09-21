import { createSlice } from "@reduxjs/toolkit";
import { Archive } from "../components/molecules/archived-container/types";
import { notes } from "./data";

const notifySlice = createSlice({
  name: "notify",
  initialState: {
    notes: [...notes],
    archivedNotes: [
      {
        id: 1,
        category: "task",
        archived: [],
        active: 2,
      },
      {
        id: 2,
        category: "randomThought",
        archived: [],
        active: 1,
      },
      {
        id: 3,
        category: "idea",
        archived: [],
        active: 1,
      },
      {
        id: 4,
        category: "quote",
        archived: [],
        active: 1,
      },
    ],
  },
  reducers: {
    addNotify(state, action) {
      state.notes.push({
        ...action.payload,
        id: state.notes.length + 1,
        archived: false,
      });

      state.archivedNotes.forEach((archivedStatistic: Archive) => {
        if (action.payload.category === archivedStatistic.category)
          archivedStatistic.active += 1;
      });
    },
    deleteNotify(state, action) {
      state.archivedNotes.forEach((archivedStatistic: Archive) => {
        if (action.payload.category === archivedStatistic.category)
          archivedStatistic.active -= 1;
      });

      state.notes = state.notes.filter(
        (notes) => notes.id !== action.payload.id
      );
    },
    changeNotify(state, action) {},
    archiveNotify(state, action) {
      state.archivedNotes.forEach((archivedStatistic: Archive) => {
        if (action.payload.category === archivedStatistic.category) {
          archivedStatistic.archived = [
            ...archivedStatistic.archived,
            action.payload,
          ];

          archivedStatistic.active -= 1;
        }
      });

      state.notes = state.notes.filter(
        (notes) => notes.id !== action.payload.id
      );
    },
  },
});

export const { addNotify, deleteNotify, changeNotify, archiveNotify } =
  notifySlice.actions;

export default notifySlice.reducer;
