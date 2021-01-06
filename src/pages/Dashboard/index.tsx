import React, { useState } from "react";
import TicketsView from "../../views/TicketsView";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { FaList } from "react-icons/fa";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { Container, Header, Sidebar, Footer } from "./styles";

const Dashboard: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const toogleSideBar = () => {
    setIsActive(!isActive);
  };

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
      <Header id="header">
        <div className="header-container-1">
          <div className="sidebar-button-mobile">
            <FaList onClick={toogleSideBar} size={25} />
          </div>
          <div className="logo-container">Logo</div>
        </div>
        <div className="search-container">
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div>Opções</div>
      </Header>

      <div id="row-container">
        <Sidebar id="sidebar" isActive={isActive}>
          <List id="menu-options" disablePadding dense>
            {items &&
              items.map((item) => (
                <ListItem button key={item.name}>
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
              ))}
          </List>
          <div id="hide-button" onClick={toogleSideBar}>
            <div>{isActive ? "<" : ">"}</div>
          </div>
        </Sidebar>

        <div id="view-container">
          <main id="content-wrapper">
            <TicketsView />
          </main>
          <Footer>Desk Thauã. Todos os direitos reservados. 2021</Footer>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
