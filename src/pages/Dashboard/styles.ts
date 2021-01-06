import styled, { css } from "styled-components";
import { Container as ContainerReactstrap } from "reactstrap";

export const Container = styled(ContainerReactstrap)`
  height: 100vh;
  padding: 0;

  #header {
  }

  #sidebar {
  }

  #row-container {
    display: flex;
    height: calc(100% - 80px);
  }

  #view-container {
    flex: 1;
    height: 100%;
  }

  #content-wrapper {
    height: calc(100% - 50px);
    overflow-y: auto;
  }
`;

export const Header = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .header-container-1 {
    .sidebar-button-mobile {
      visibility: hidden;
      display: none;
      margin: 0;

      svg {
        cursor: pointer;
      }
    }
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .logo-container {
  }

  @media screen and (max-width: 600px) {
    .header-container-1 {
      .sidebar-button-mobile {
        margin-right: 30px;
        visibility: visible;
        display: block;
      }
    }

    .search-container {
      display: none;
      visibility: hidden;
    }
  }
`;

interface ContainerProps {
  isActive: boolean;
}

export const Sidebar = styled.div<ContainerProps>`
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

  display: flex;
  flex-direction: column;
  background-color: #f3f3f8;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6px 5px;
  z-index: 1;
  transition: width 1s;

  #menu-options {
    flex: 1;
    transition: margin 1s, opacity 0.7s;
  }

  #hide-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;

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

  @media screen and (max-width: 600px) {
    ${(props) =>
      props.isActive
        ? css`
            height: calc(100% - 80px);
            visibility: visible;
            #menu-options {
              margin: 0;
              opacity: 1;
            }
          `
        : css`
            height: 0;
            width: 0;
            visibility: hidden;
            box-shadow: 0px 0px 0px;
            #menu-options {
              margin: 0;
              opacity: 0;
            }
          `}

    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #f3f3f8;

    transition: height 1s, visibility 1s;
    /* transition-delay: 5s;
    transition-property: display; */

    #menu-options {
      span {
        text-align: center;
      }
    }

    #hide-button {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
