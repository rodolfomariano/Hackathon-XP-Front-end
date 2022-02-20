import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding-bottom: 16px;
  padding-top: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const Details = styled.View`
  width: 300px;
  margin-left: 16px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
`

export const Divider = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.shape_200};
`