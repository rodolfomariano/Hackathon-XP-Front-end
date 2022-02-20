import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.View`
  width: 216px;
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const IconContainer = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.banner};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.Image`
  width: 40px;
  height: 34px;
  
`

export const ContentInfo = styled.View`
  margin-left: 14px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  color: ${({ theme }) => theme.colors.title};
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
`