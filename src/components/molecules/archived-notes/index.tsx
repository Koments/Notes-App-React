import { NotesStatistic } from "./styled-components";


export default function ArchivedNotes () {
    return (
      <NotesStatistic>
        <div className="notes-statistic-header">
          <div className="notes-statistic-category">Note Category</div>
          <div className="notes-statistic-active">Active</div>
          <div className="archived">Archived</div>
        </div>
      </NotesStatistic>
    );
}