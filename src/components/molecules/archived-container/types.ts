import { Note } from "../active-notes/types";

export type Archive = {
    id: string;
    category: string;
    archived: Note[];
    active: number;
};

export type ArchivedNotes = {
    archivedNotes: Archive[];
};

export type NotesReducer = {
    notes: ArchivedNotes;
};
