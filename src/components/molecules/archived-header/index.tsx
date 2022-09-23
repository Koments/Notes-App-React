import { NotesStatistic } from "./styled-components";


export function ArchivedHeader () {
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