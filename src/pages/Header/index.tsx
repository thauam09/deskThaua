import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <div className="logo-container">Logo</div>
        <div>
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div>Opções</div>
      </Container>
    </>
  );
};

export default Header;
