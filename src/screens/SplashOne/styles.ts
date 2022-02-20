import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`