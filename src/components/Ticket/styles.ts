import styled from "styled-components";

export const Container = styled.article`
  height: 90px;
  width: 100%;
  border-radius: 8px;
  background-color: #fdfdfd;
  display: flex;

  & + article {
    margin-top: 15px;
  }
`;
