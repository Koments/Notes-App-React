import styled from "@emotion/styled";

export const ArchivedStatistic = styled.div`
    margin: 30px;

    .notes-statistic-card {
        background-color: #e8eaf5;
        display: flex;
        align-items: center;
        font-size: 20px;
        padding: 0px 20px;
        height: 60px;
        margin: 10px 0;
        border-radius: 5px;
    };

    .notes-statistic-icon {
        width: 50px;
        color: white;
        background: #616161;
        height: 70%;
        display: -webkit-box;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        margin-right: 10px;
    };

    .notes-statistic-name {
        width: 50%;
    };

    .notes-statistic-active {
        width: 25%;
    };

    .notes-statistic-archived {
        width: 35%;
    };

    .modal-container {
        background-color: #7a7a7a;
        width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    };
`;
