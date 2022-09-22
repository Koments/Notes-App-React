import { NotesContainer } from "./styled-components";

export default function Header() {
  return (
    <NotesContainer>
      <div className="notes-cards-header">
        <div className="notes-card notes-card-name">Name</div>
        <div className="notes-card notes-card-created">Create</div>
        <div className="notes-card notes-card-category">Category</div>
        <div className="notes-card notes-card-content">Content</div>
        <div className="notes-card notes-card-dates">Dates</div>
        <div className="notes-card notes-card-images">
          <div className="notes-card-image"></div>
          <div className="notes-card-image">
            <i className="bi bi-file-earmark-zip-fill"></i>
          </div>
          <div className="notes-card-image">
            <i className="bi bi-trash-fill"></i>
          </div>
        </div>
      </div>
    </NotesContainer>
  );
}
