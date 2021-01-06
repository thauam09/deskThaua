import React from "react";
import { Container, ViewHeader } from "./styles";

import Ticket from "../../components/Ticket";

const TicketsView: React.FC = () => {
  return (
    <>
      <Container>
        <ViewHeader>
          <h4>Sob Minha Responsabilidade</h4>
          <h6>Veja os tickets que estão aguardando sua resposta</h6>
        </ViewHeader>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
      </Container>
    </>
  );
};

export default TicketsView;
