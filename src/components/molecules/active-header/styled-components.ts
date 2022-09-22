import styled from "@emotion/styled";

export const NotesContainer = styled.div`
  margin: 30px;

  .notes-cards-header {
    display: flex;
    background-color: #999999;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }

  .notes-card {
    display: flex;
    font-size: 20px;
  }

  .notes-card-icon {
    width: 60px;
  }

  .notes-card-name {
    width: 275px;
    margin-left: 50px;
  }

  .notes-card-created,
  .notes-card-category,
  .notes-card-content {
    width: 200px;
  }

  .notes-card-dates {
    width: 275px;
  }

  .notes-card-images {
    width: 90px;
    justify-content: space-between;
  }

  .notes-card-image {
    width: 30px;
  }
`;
