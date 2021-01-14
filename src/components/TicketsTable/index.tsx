import React from "react";

import {
  Table,
  Ticket,
  Info,
  TicketId,
  Category,
  Priority,
  Status,
  CreatedAt,
} from "./styles";

interface ITicketsData {
  requesterData: {
    avatar_url: string;
    username: string;
    email: string;
  };
  ticketId: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
}

interface TicketsTableProps {
  ticketsData: ITicketsData[];
}

const TicketsTable: React.FC<TicketsTableProps> = ({ ticketsData }) => {
  return (
    <Table>
      <thead>
        <th>Solicitante</th>
        <th>Ticket ID</th>
        <th>Categoria/Assunto</th>
        <th>Prioridade</th>
        <th>Status</th>
        <th>Solicitado em:</th>
      </thead>
      <tbody>
        {ticketsData.map((ticket) => (
          <Ticket>
            <td id="user-info">
              <div>
                <Info>
                  <div className="avatar"></div>
                  <div className="requester-info">
                    <h6>{ticket.requesterData.username}</h6>
                    <p>{ticket.requesterData.email}</p>
                  </div>
                </Info>
              </div>
            </td>
            <td id="ticket_id">
              <TicketId>{ticket.ticketId}</TicketId>
            </td>
            <td id="category">
              <Category>{ticket.category}</Category>
            </td>
            <td id="priority">
              <div>
                <Priority priority={ticket.priority}>
                  {ticket.priority}
                </Priority>
              </div>
            </td>
            <td id="status">
              <div>
                <Status status={ticket.status}>{ticket.status}</Status>
              </div>
            </td>
            <td id="created_at">
              <CreatedAt>{ticket.created_at}</CreatedAt>
            </td>
          </Ticket>
        ))}
      </tbody>
    </Table>
  );
};

export default TicketsTable;
