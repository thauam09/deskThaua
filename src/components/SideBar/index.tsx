import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { Container } from "./styles";

interface IItems {
  name: string;
  label: string;
}

interface IProps {
  items?: IItems[];
}

const SideBar: React.FC<IProps> = ({ items }) => {
  const [sideBar, setSideBar] = useState(true);

  const toogleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <Container isActive={sideBar}>
      <List id="menu-options" disablePadding dense>
        {items &&
          items.map((item) => (
            <ListItem button key={item.name}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
      </List>
      <div id="hide-button" onClick={toogleSideBar}>
        <div>{sideBar ? "<" : ">"}</div>
      </div>
    </Container>
  );
};

export default SideBar;
