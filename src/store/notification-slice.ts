import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../components/molecules/active-notes/types";
import { Archive } from "../components/molecules/archived-container/types";
import { notes } from "./data";
import { State } from "./types";
import uuid from "react-uuid";

const notifySlice = createSlice({
    name: "notify",
    initialState: {
        notes: [...notes],
        archivedNotes: [
        {
            id: uuid(),
            category: "task",
            archived: [],
            active: 2,
        },
        {
            id: uuid(),
            category: "randomThought",
            archived: [],
            active: 1,
        },
        {
            id: uuid(),
            category: "idea",
            archived: [],
            active: 1,
        },
        {
            id: uuid(),
            category: "quote",
            archived: [],
            active: 1,
        },
        ],
    },
    reducers: {
        addNotify(state, action) {
            addNote(state, action.payload, "addNotify");
        },
        
        deleteNotify(state, action) {
            deleteNotifyFromStatistic(state, action.payload, "deleteNotify");
        },

        changeNotify(state, action) {
            const index = state.notes.findIndex((note) => note.id === action.payload.id);
            state.notes[index] = action.payload
        },

        archiveNotify(state, action) {
            deleteNotifyFromStatistic(state, action.payload, "archived");
        },

        unZip(state, action) {
            addNote(state, action.payload, "unZip");
        },
    },
});

export const { addNotify, deleteNotify, changeNotify, archiveNotify, unZip } = notifySlice.actions;

export default notifySlice.reducer;

function addNote(state: State, action: Note, nameSetting: string) {
    state.notes.push({
        ...action,
        id: action.id ? action.id : uuid(),
    });

    state.archivedNotes.forEach((archivedStatistic: Archive) => {
        if (action.category === archivedStatistic.category)
        archivedStatistic.active += 1;

        if (nameSetting === "unZip") {
        archivedStatistic.archived = archivedStatistic.archived.filter(
            (notes) => notes.id !== action.id
        );
        }
    });
}

function deleteNotifyFromStatistic(
  state: State,
  action: Note,
  nameSetting: string
) {
    state.archivedNotes.forEach((archivedStatistic: Archive) => {
        if (action.category === archivedStatistic.category) {
        if (nameSetting === "archived")
            archivedStatistic.archived = [...archivedStatistic.archived, action];

        archivedStatistic.active -= 1;
        state.notes = state.notes.filter((notes) => notes.id !== action.id);
        }
    });
}
