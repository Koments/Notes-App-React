import styled from "@emotion/styled";

export const ChangeNotifyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 auto;
  width: 440px;
  height: 440px;
  padding: 5px 20px;
  background-color: #7a7a7a;
  color: white;

  .new-note-name,
  .new-note-category,
  .new-note-info,
  #new-note-category-option,
  .new-note-date-container div {
    width: 100%;
    margin-top: 20px;
  }

  .create-new-note div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .modal-content-add-note {
    display: flex;
    justify-content: space-between;
  }
`;
