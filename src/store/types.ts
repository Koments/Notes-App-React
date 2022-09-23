import { Note } from "../components/molecules/active-notes/types";

export type State = {
    notes: Note[];
    archivedNotes: {
        id: string;
        category: string;
        archived: Note[];
        active: number;
    }[];
};