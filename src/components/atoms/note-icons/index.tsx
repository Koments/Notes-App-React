import { NotesImages } from "./styled-components";

export default function NoteIcons(){
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
          <i className="bi bi-file-earmark-zip-fill"></i>
        </div>
        <div className="card-notes-image">
          <i className="bi bi-trash-fill"></i>
        </div>
      </NotesImages>
    );
}