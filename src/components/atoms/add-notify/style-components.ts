import styled from "@emotion/styled";

export const AddNotifyContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 30px;

    .ReactModal__Content {
        position: absolute;
        inset: 40px;
        border: 1px solid rgb(204, 204, 204);
        background: rgb(255, 255, 255);
        overflow: auto;
        border-radius: 4px;
        outline: none;
        padding: 20px;
    };
    `

export const ModalContentStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 440px;
    height: 640px;
    padding: 5px 20px;
    background-color: #7a7a7a;
    color: white;

    .create-new-note div {
        display: flex;
        flex-direction: column;
        text-align: center;
    };

    .new-note-name,
    .new-note-category,
    .new-note-info,
    #new-note-category-option {
        width: 100%;
        margin-top: 20px;
    };

    .new-note-date-container {
        display: flex;
        justify-content: space-around;
    };

    .new-note-date-container div {
        margin-top: 20px;
    };

    .modal-content-add-note {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    };
`;
