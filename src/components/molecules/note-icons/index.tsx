import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { deleteNotify, archiveNotify } from "../../../store/notification-slice";
import { Note } from "../active-notes/types";
import { NotesImages } from "./styled-components";
import { useState } from "react";

interface CardInfoProps {
  note: Note;
}

Modal.setAppElement("#root");

export default function NoteIcons(note: CardInfoProps) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <NotesImages>
      <div className="card-notes-image">
        <i className="bi bi-pencil-fill"></i>
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
