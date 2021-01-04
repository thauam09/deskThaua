import styled from "styled-components";
import { Container as ContainerReactstrap } from "reactstrap";

export const Container = styled(ContainerReactstrap)`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;

  #header {
    width: 100%;
  }

  #layout-container {
    flex: 1;
    display: flex;

    #rest {
      flex: 1;
      display: flex;
      flex-direction: column;

      #content {
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
      }

      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: #fff;
      }
    }
  }
`;
