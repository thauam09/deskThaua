import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;

  th {
    text-align: center;
  }
`;

export const Ticket = styled.tr`
  height: 90px;
  color: #7279b5;

  td {
    background-color: #fff;
  }

  th + th,
  td + td {
    padding: 0 7px;
  }

  & td:first-child {
    padding-left: 7px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  & td:last-child {
    padding-right: 7px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  td#user-info {
    width: 25%;
  }

  td#ticket_id {
    width: 4%;
  }

  td#category {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 30%;
  }

  td#priority {
    width: 13%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  td#status {
    width: 13%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  td#created_at {
    width: 15%;
  }
`;

export const Info = styled.div`
  display: flex;

  div.avatar {
    width: 60px;
    height: 60px;
    background-color: #ddd;
    border-radius: 100%;
    margin-right: 15px;
  }

  div.requester-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h6 {
      font-weight: bold;
    }

    p {
      font-size: 12px;
    }
  }
`;

interface IPriority {
  priority: string;
}

export const TicketId = styled.div`
  text-align: center;
`;

export const Category = styled.div`
  text-align: center;
`;

export const Priority = styled.div<IPriority>`
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;

  ${(props) =>
    props.priority === "Baixa" &&
    css`
      background-color: #c6f2c4;
      border: #56ad51 1px solid;
      color: #56ad51;
    `}

  ${(props) =>
    props.priority === "Média" &&
    css`
      background-color: #e8efff;
      border: #758efa 1px solid;
      color: #758efa;
    `}

${(props) =>
    props.priority === "Alta" &&
    css`
      background-color: #f9e5e6;
      border: #ef7672 1px solid;
      color: #ef7672;
    `}
`;

interface IStatus {
  status: string;
}

export const Status = styled.div<IStatus>`
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;

  ${(props) =>
    props.status === "Aberto" &&
    css`
      background-color: #c6f2c4;
      border: #56ad51 1px solid;
      color: #56ad51;
    `}

  ${(props) =>
    props.status === "Aguardando resposta" &&
    css`
      background-color: #e8efff;
      border: #758efa 1px solid;
      color: #758efa;
    `}

${(props) =>
    props.status === "Fechado" &&
    css`
      background-color: #f9e5e6;
      border: #ef7672 1px solid;
      color: #ef7672;
    `}
`;

export const CreatedAt = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
