import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  flex: 1;
  margin-top: 24px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 128px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GoToBackButton = styled.TouchableOpacity`
 position: absolute;
 top: 24px;
 left: 24px;
`

export const Content = styled.View`
  padding-left: 32px;
  padding-right: 32px;

  display: flex;
  align-items: center;
`

export const ImageBanner = styled.Image`
  width: 200px;
  height: 220px;
  margin-bottom: 48px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  text-align: center;
  margin-bottom: 24px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  text-align: center;
`

export const ProgressContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const Circle = styled.View`
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.shape_200};
`

export const Footer = styled.View`
  width: 100%;
  padding: 0 24px;

  display: flex;
  align-items: center;
`

export const NextButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.icons};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const NextButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  font-size: 16px;
`

export const JumpButton = styled.TouchableOpacity`
  margin-bottom: 72px;
  margin-top: 32px;
`

export const JumpButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`