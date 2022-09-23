import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { deleteNotify, archiveNotify, changeNotify } from "../../../store/notification-slice";
import { Note } from "../active-notes/types";
import { NotesImages } from "./styled-components";
import ChangeNote from "../../atoms/change-note";

interface CardInfoProps {
  note: Note;
}

Modal.setAppElement("#root");

export default function NoteIcons(note: CardInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <NotesImages>
        <div className="card-notes-image">
          <i className="bi bi-pencil-fill" onClick={() => setIsOpen(true)}></i>
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="Modal"
      >
        <ChangeNote
          note={note.note}
          changeNotify={(note: Note) => dispatch(changeNotify(note))}
        />
      </Modal>
    </>
  );
}
