import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { categories } from "../../../store/data";
import { SelectedArchiveCategory } from "../../atoms/selected-archive-category";
import { ArchivedStatistic } from "./styled-components";
import { Archive, NotesReducer } from "./types";

Modal.setAppElement("#root");

export function ArchivedContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const archiveArr = useSelector<NotesReducer, Archive[]>(
    (state) => state.notes.archivedNotes
  );

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <ArchivedStatistic>
      {archiveArr.map((category) => {
        let cardIcon = categories[category.category];
        const archivedLength = category.archived.length;

        return (
          <div key={category.id}>
            <div
              className="notes-statistic-card"
              data-bs-toggle="modal"
              data-bs-target="#exampleSecondModal"
              onClick={toggleModal}
            >
              <div className="notes-statistic-icon">
                <i className={cardIcon.icon}></i>
              </div>
              <div className="notes-statistic-name">{category.category}</div>
              <div className="notes-statistic-active">{category.active}</div>
              <div className="notes-statistic-archived">{archivedLength}</div>
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
              >
                <SelectedArchiveCategory notes={category.archived} />
              </Modal>
            </div>
          </div>
        );
      })}
    </ArchivedStatistic>
  );
}
