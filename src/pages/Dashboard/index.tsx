import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Row, Col } from "reactstrap";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const items = [
    {
      name: "Minhas Solicitações",
      label: "Minhas Solicitações",
    },
    {
      name: "Sob Minha Responsabilidade",
      label: "Sob Minha Responsabilidade ",
    },
    {
      name: "Colaboradores",
      label: "Colaboradores",
    },
  ];

  return (
    <Container fluid>
      <div id="header">
        <Header></Header>
      </div>

      <div id="layout-container">
        <div id="sidebar">
          <SideBar items={items}></SideBar>
        </div>

        <div id="rest">
          <div id="content">Content</div>

          <footer>Desk Thauã. Todos os direitos reservados. 2021</footer>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
