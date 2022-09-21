import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { AddNotifyContainer, ModalContentStyle } from "./style-components";
import { addNotify } from "../../../store/notification-slice";

Modal.setAppElement("#root");

export function AddNotify() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const today = new Date();

  let newNote = {
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
    if (event.target.id === "start-date") {
      newNote.dates = event.target.value;
    } else if (event.target.id === "end-date") {
      newNote.dates = event.target.value;
    } else if (event.target.id === "end-date" && newNote.dates !== "") {
      newNote.dates = ", " + event.target.value;
    }
  };

  function addNewNotify() {
    newNote.name === "" || newNote.content === ""
      ? alert("Name or content is empty")
      : dispatch(addNotify(newNote));
  }

  return (
    <AddNotifyContainer>
      <button onClick={toggleModal}>Open modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="Modal"
      >
        <ModalContentStyle>
          <h2>Create a new note</h2>
          <div className="create-new-note">
            <div className="new-note-name">
              <label htmlFor="new-note-name">Enter name</label>
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
              <div>
                <label htmlFor="start">Enter start date</label>
                <br />
                <input type="date" id="start-date" onChange={setInfo} />
              </div>
              <div>
                <label htmlFor="end">Enter end date</label>
                <br />
                <input type="date" id="end-date" onChange={setInfo} />
              </div>
            </div>
          </div>
          <div className="modal-content-add-note">
            <button
              className="modal-content-add-note-btn"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="modal-content-add-note-btn"
              onClick={addNewNotify}
            >
              Add note
            </button>
          </div>
        </ModalContentStyle>
      </Modal>
    </AddNotifyContainer>
  );
}
