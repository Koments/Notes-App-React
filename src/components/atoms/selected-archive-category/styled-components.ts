import styled from "@emotion/styled";

export const ArchivedNote = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 800px;
  margin: 0 auto;

  .notes-info-card {
    background-color: #e8eaf5;
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 0px 20px;
    height: 60px;
    margin: 10px 0;
    border-radius: 5px;
    justify-content: space-between;
  }

  .notes-info-card div {
    align-items: center;
  }

  .statistic-card-name {
    display: flex;
    width: 230px;
    color: #888a8e;
    height: 100%;
  }

  .statistic-card-created,
  .statistic-card-category,
  .statistic-card-content {
    width: 168px;
    color: #9899a0;
  }

  .statistic-card-dates {
    color: #7a7a7a;
  }
  
  .zipped {
    width: 30px;
    color: #7a7a7a;
  }
`;
