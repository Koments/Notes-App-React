import { Note } from "../../molecules/active-notes/types";
import { CardInfoCss } from "./styled-components";

interface CardInfoProps {
  note: Note;
}

export function CardInfo({ note }: CardInfoProps) {
  return (
    <CardInfoCss>
      <div className="card-name">{note.name}</div>
      <div className="card-created">{note.created}</div>
      <div className="card-category">{note.category}</div>
      <div className="card-content">{note.content}</div>
      <div className="card-dates">{note.dates}</div>
    </CardInfoCss>
  );
}
