import React from "react";
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
  return (
    <Container>
      <List disablePadding dense>
        {items &&
          items.map((item) => (
            <ListItem button key={item.name}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default SideBar;
