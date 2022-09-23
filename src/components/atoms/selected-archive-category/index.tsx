import { Note } from "../../molecules/active-notes/types";
import { Archive } from "../../molecules/archived-container/types";
import { ArchivedNote } from "./styled-components";

interface SelectedArchiveCategoryProps {
    category?: Archive;
    unArchiveNote: (note: Note) => void;
}

export function SelectedArchiveCategory({
  category,
  unArchiveNote,
}: SelectedArchiveCategoryProps) {
    const archivedNotes = category?.archived ?? [];

    if (archivedNotes.length === 0) {
        return <h2>Empty</h2>;
    }

    return (
        <>
        {archivedNotes.map((note: Note) => (
            <ArchivedNote key={note.id}>
            <div className="notes-info-card">
                <div className="statistic-card-name">{note.name}</div>
                <div className="statistic-card-created">{note.created}</div>
                <div className="statistic-card-content">{note.content}</div>
                <div className="statistic-card-dates">{note.dates}</div>
                <div
                id="notes-card notes-images"
                className="notes-card notes-images"
                >
                <div className="statistic-card-notes-image">
                    <i
                    className="bi bi-file-earmark-zip-fill zipped"
                    onClick={() => unArchiveNote(note)}
                    ></i>
                </div>
                </div>
            </div>
            </ArchivedNote>
        ))}
        </>
    );
}
