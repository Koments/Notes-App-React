import { useDispatch } from "react-redux";
import { deleteNotify, archiveNotify } from "../../../store/notification-slice";
import { Note } from "../../molecules/active-notes/types";
import { NotesImages } from "./styled-components";

interface CardInfoProps {
  note: Note;
}

export default function NoteIcons(note: CardInfoProps) {
  const dispatch = useDispatch();

  return (
    <NotesImages>
      <div className="card-notes-image">
        <i
          className="bi bi-pencil-fill"
          data-bs-toggle="modal"
          data-bs-target="#changeNote"
        ></i>
      </div>
      <div className="card-notes-image">
        <i
          className="bi bi-file-earmark-zip-fill"
          onClick={() => dispatch(archiveNotify(note.note))}
        ></i>
      </div>
      <div className="card-notes-image">
        <i
          className="bi bi-trash-fill"
          onClick={() => dispatch(deleteNotify(note.note))}
        ></i>
      </div>
    </NotesImages>
  );
}
