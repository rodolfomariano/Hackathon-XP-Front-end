import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  position: relative;
  width: 100%;
  margin-top: 36px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GoToBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  left: 0px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  font-size: 20px;
`

export const EmotionContainer = styled.View`
  margin-top: 32px;
`

export const QuestionTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`

export const EmotionSelectContainer = styled.View`
  width: 100%;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const EmotionButton = styled.TouchableOpacity`
  width: 87px;
  height: 87px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const EmojiImage = styled.Image`
  width: 35px;
  height: 35px;
`

export const EmotionTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 8px;
`

export const CardFinancialHealthHeader = styled.View`
  width: 100%;

  margin-top: 32px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`


export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.title};
`

export const CardDescription = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 8px;
  margin-top: 16px;

`

export const KnowMoreButton = styled.TouchableOpacity`

`

export const ScoreContainer = styled.View`

  margin-bottom: 22px;
  
`

export const ScoreResult = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;
`

export const Span = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
`

export const ScoreResultBar = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape_200};
  margin-top: 4px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  
`

export const ScoreResultProgress = styled.View`
  /* width: 56px; */
  height: 14px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
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

export const TipContainer = styled.ScrollView`

`

export const TipTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 8px;
  
`

export const TipDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text_card};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 16px;
`

export const TipCard = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  margin-bottom: 16px;
`

export const TipCarTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  font-size: 16px;
`

export const TrpCardDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`

export const TipButton = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonTitle = styled.Text`
  font-size: 14px;
`