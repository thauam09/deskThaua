import React from "react";
import { Container, ViewHeader } from "./styles";

import TicketsTable from "../../components/TicketsTable";

const TicketsView: React.FC = () => {
  const ticketsData = [
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "mariazinha",
        email: "mariazinha@gmail.com",
      },
      ticketId: "000002",
      category: "Instalação de Programas",
      priority: "Média",
      status: "Aberto",
      created_at: "31/12/2020 - 23:59",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "joazinho",
        email: "joaozinho@gmail.com",
      },
      ticketId: "000003",
      category: "Criação de acessos",
      priority: "Alta",
      status: "Aguardando resposta",
      created_at: "07/09/2020 - 12:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
    {
      requesterData: {
        avatar_url: "#",
        username: "felipinho",
        email: "felipinho@gmail.com",
      },
      ticketId: "000001",
      category: "Concessão de acessos",
      priority: "Baixa",
      status: "Fechado",
      created_at: "25/12/2020 - 00:00",
    },
  ];

  return (
    <>
      <Container>
        <ViewHeader>
          <h4>Sob Minha Responsabilidade</h4>
          <h6>Veja os tickets que estão aguardando sua resposta</h6>
        </ViewHeader>
        <TicketsTable ticketsData={ticketsData} />
      </Container>
    </>
  );
};

export default TicketsView;
