export type Note = {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
};

export type Notes = {
    notes: Note[];
};

export type NotesReducer = {
    notes: Notes;
};

export type Category = {
    [x: string]: {
        icon: string;
        label: string;
    };
};
