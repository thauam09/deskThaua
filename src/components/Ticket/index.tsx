import React from "react";

import { Container } from "./styles";

const Ticket: React.FC = () => {
  return (
    <Container>
      <div id="avatar"></div>
      <div id="user-info"></div>
      <div id="ticket_id"></div>
      <div id="subject"></div>
      <div id="priority"></div>
      <div id="status"></div>
      <div id="created_at"></div>
      <div id="options"></div>
      <div></div>
    </Container>
  );
};

export default Ticket;
