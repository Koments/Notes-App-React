export type Archive = {
  id: number;
  category: string;
  archived: [] | any;
  active: number;
};

export type ArchivedNotes = {
  archivedNotes: Archive[];
};

export type NotesReducer = {
  notes: ArchivedNotes;
};