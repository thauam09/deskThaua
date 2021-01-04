import styled, { css } from "styled-components";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;

  transition: width 1s;

  #menu-options {
    flex: 1;
    transition: margin 1s, opacity 0.7s;

    div span {
      overflow: hidden;
    }
  }

  #hide-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 0;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      padding: 0;
      cursor: pointer;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  ${(props) =>
    props.isActive
      ? css`
          width: 250px;

          #menu-options {
            margin: 0;
            opacity: 1;
          }
        `
      : css`
          width: 50px;

          #menu-options {
            margin: 0 -250px;
            opacity: 0;
          }
        `}
`;
