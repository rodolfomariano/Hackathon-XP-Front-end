import styled from 'styled-components/native'

export const Container = styled.View`
  padding-bottom: 8px;
  padding-top: 8px;
`

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SeeMoreButton = styled.TouchableOpacity`
  padding: 4px;
`

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
`

export const SpanDescription = styled.View`
  
`

export const Span = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-size: 10px;
  margin-top: 4px;
`

export const PunctuationContainer = styled.View`
  margin-top: 24px;
`

export const Punctuation = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
`

export const PunctuationBar = styled.View`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.shape_200};
  border-radius: 5px;
  margin-top: 8px;

  display: flex;
  justify-content: center;
`

export const PunctuationStatus = styled.View`
  height: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`