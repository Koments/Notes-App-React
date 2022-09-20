import { AddNotifyContainer } from "./style-components";

export function AddNotify({ addNewNotify }: any) {
  return (
    <AddNotifyContainer>
      <h2>Create a new note</h2>
      <div className="create-new-note">
        <div className="new-note-name">
          <label htmlFor="new-note-name">Enter name</label>
          <br />
          <input type="text" id="new-note-name-input" />
        </div>
        <div className="new-note-category">
          <div>Select category</div>
          <select id="new-note-category-option">
            <option value="task">Task</option>
            <option value="randomThought">Random Thought</option>
            <option value="idea">Idea</option>
            <option value="quote">Quote</option>
          </select>
        </div>
        <div className="new-note-info">
          <label htmlFor="new-note-info">Enter information</label>
          <br />
          <input type="text" id="new-note-info-input" />
        </div>
        <div className="new-note-date-container">
          <div>
            <label htmlFor="start">Enter start date</label>
            <br />
            <input type="date" id="start-date" />
          </div>
          <div>
            <label htmlFor="end">Enter end date</label>
            <br />
            <input type="date" id="end-date" />
          </div>
        </div>
      </div>
      <div className="modal-content-add-note">
        <button className="modal-content-add-note-btn" onClick={addNewNotify}>
          Add note
        </button>
      </div>
    </AddNotifyContainer>
  );
}
