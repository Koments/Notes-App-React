import { Note, Notes } from "../../molecules/active-notes/types";

export function SelectedArchiveCategory(notes: Notes | any) {
  console.log(notes);

  return (
    <>
      {notes.notes.map((note: Note) => {
        if (notes.notes.length === 0) {
          return <h2>Empty</h2>;
        } else {
          return (
            <div key={note.id} className="notes-info-card">
              <div className="statistic-card-name">{note.name}</div>
              <div className="statistic-card-created">{note.created}</div>
              <div className="statistic-card-content">{note.content}</div>
              <div className="statistic-card-dates">{note.dates}</div>
              <div
                id="notes-card notes-images"
                className="notes-card notes-images"
              >
                <div className="statistic-card-notes-image">
                  <i className="bi bi-file-earmark-zip-fill ziped"></i>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
