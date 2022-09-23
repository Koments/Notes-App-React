import { useSelector } from "react-redux";
import { CardInfo } from "../../atoms/card-info";

import NoteIcons from "../note-icons";
import { NoteCard } from "./styled-components";
import { Note, NotesReducer } from "./types";
import { categories } from "../../../store/data";

export default function ActiveNotesCardContainer() {
    const notes = useSelector<NotesReducer, Note[]>((state) => state.notes.notes);

    return (
        <NoteCard>
        {notes?.map((note) => {
            let cardIcon = categories[note.category];

            return (
              <div key={note.id} className="notes-info-card">
                <div className="card-icon">
                  <i className={cardIcon.icon}></i>
                </div>
                <CardInfo note={note} />
                <NoteIcons note={note} />
              </div>
            );
        })}
        </NoteCard>
    );
}
