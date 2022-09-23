import styled from "@emotion/styled";

export const NoteCard = styled.div`
  margin: 0 30px;

  .notes-info-card {
    background-color: #e8eaf5;
    display: -webkit-box;
    align-items: center;
    font-size: 20px;
    padding: 0px 20px;
    height: 60px;
    margin: 10px 0;
    border-radius: 5px;
    width: 100%;
  }

  .card-icon {
    width: 42px;
    color: white;
    background: #616161;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    margin-right: 10px;
  }

  .notes-statistic-icon {
    width: 50px;
    color: white;
    background: #616161;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    margin-right: 10px;
  }

  .card-name,
  .card-dates,
  .card-created,
  .card-category,
  .card-content,
  .statistic-card-name,
  .statistic-card-created,
  .statistic-card-content,
  .statistic-card-dates {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .card-name {
    display: flex;
    width: 230px;
    color: #888a8e;
    height: 100%;
  }

  .card-created,
  .card-category,
  .card-content {
    width: 168px;
    color: #9899a0;
  }

  .card-dates {
    width: 225px;
    color: #9899a0;
  }
`;
