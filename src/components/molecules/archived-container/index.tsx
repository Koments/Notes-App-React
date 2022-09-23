import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../../store/data";
import { unZip } from "../../../store/notification-slice";
import { SelectedArchiveCategory } from "../../atoms/selected-archive-category";
import { ArchivedStatistic } from "./styled-components";
import { Archive, NotesReducer } from "./types";

Modal.setAppElement("#root");

export function ArchivedContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponentId, setSelectedComponentId] = useState<string>();

  const archiveArr = useSelector<NotesReducer, Archive[]>(
    (state) => state.notes.archivedNotes
  );
  
  const dispatch = useDispatch();

  return (
    <ArchivedStatistic>
      {archiveArr.map((category) => {
        const cardIcon = categories[category.category];
        const archivedLength = category.archived.length;

        return (
          <div key={category.id}>
            <div
              className="notes-statistic-card"
              onClick={() => {
                setIsOpen(true);
                setSelectedComponentId(category.id);
              }}
            >
              <div className="notes-statistic-icon">
                <i className={cardIcon.icon}></i>
              </div>
              <div className="notes-statistic-name">{category.category}</div>
              <div className="notes-statistic-active">{category.active}</div>
              <div className="notes-statistic-archived">{archivedLength}</div>
            </div>
          </div>
        );
      })}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="Modal"
      >
        <div className="modal-container">
          <SelectedArchiveCategory
            category={archiveArr.find(
              (category) => category.id === selectedComponentId
            )}
            unArchiveNote={(note) => dispatch(unZip(note))}
          />
        </div>
      </Modal>
    </ArchivedStatistic>
  );
}
