import { Note } from "../../molecules/active-notes/types";
import { ChangeNotifyContainer } from "./styled-components";

interface CardInfoProps {
  note: {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
  };
  changeNotify: (note: Note) => void;
  onRequestClose: () => void;
}

export default function ChangeNote({ note, changeNotify, onRequestClose }: CardInfoProps) {
  const today = new Date();

  let newNote = {
    id: note.id,
    name: "",
    created: today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    category: "task",
    content: "",
    dates: "",
  };


  const setInfo = (event: any) => {
    if (event.target.id === "new-note-name-input") {
      newNote.name = event.target.value;
    }
    if (event.target.id === "new-note-category-option") {
      newNote.category = event.target.value;
    }
    if (event.target.id === "new-note-info-input") {
      newNote.content = event.target.value;
    }
  };

  return (
    <ChangeNotifyContainer>
      <h2>Change note</h2>
      <div className="create-new-note">
        <div className="new-note-name">
          <label htmlFor="new-note-name">Change Notify</label>
          <br />
          <input type="text" id="new-note-name-input" onChange={setInfo} />
        </div>
        <div className="new-note-category">
          <div>Select category</div>
          <select id="new-note-category-option" onChange={setInfo}>
            <option value="task">Task</option>
            <option value="randomThought">Random Thought</option>
            <option value="idea">Idea</option>
            <option value="quote">Quote</option>
          </select>
        </div>
        <div className="new-note-info">
          <label htmlFor="new-note-info">Enter information</label>
          <br />
          <input type="text" id="new-note-info-input" onChange={setInfo} />
        </div>
        <div className="new-note-date-container">
        </div>
      </div>
      <div className="modal-content-add-note">
        <button
          className="modal-content-add-note-btn"
          onClick={() => onRequestClose()}
        >
          Close
        </button>
        <button
          className="modal-content-add-note-btn"
          onClick={() => changeNotify(newNote)}
        >
          Change note
        </button>
      </div>
    </ChangeNotifyContainer>
  );
}
