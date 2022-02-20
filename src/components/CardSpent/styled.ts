import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  margin-bottom: 16px;
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
export const TextContent = styled.View`
  width: 300px;
`

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
`

export const SpanDescription = styled.View`
  
`

export const SpanDescriptionTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.icons};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 22px;
`

export const Span = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-size: 10px;
  margin-top: 4px;
`

export const PunctuationContainer = styled.View`
  margin-top: 16px;
`

export const Punctuation = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const SpanPunctuation = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
`

export const PunctuationBar = styled.View`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.shape_200};
  border-radius: 5px;
  margin-top: 4px;

  display: flex;
  justify-content: center;
`

export const PunctuationStatus = styled.View`
  height: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

export const TotalScoreContainer = styled.View`
  width: 100%;
  margin-top: 4px;

  display: flex;
  align-items: flex-end;
  
`

export const TotalScore = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;
`