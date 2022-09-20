export type Note = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
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
