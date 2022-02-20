import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
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

export const Main = styled.ScrollView`

`

export const BannerContainer = styled.View`
  width: 100%;
  height: 172px;
  background-color: ${({ theme }) => theme.colors.shape_200};
  border-radius: 8px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Banner = styled.Image`
  width: 100%;
  height: 172px;
`

export const BannerDescription = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 16px;
  letter-spacing: .5px;
  margin-bottom: 32px;
`

export const GenericButton = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonTextContainer = styled.View`
  margin-left: 16px;

  display: flex;
  
`

export const ButtonContent = styled.View`
  display: flex;
  flex-direction: row;
`

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const ButtonDescription = styled.Text`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text_card};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 6px;
`

export const CardFinancialHealth = styled.View`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 32px;
  margin-top: 16px;
`

export const CardFinancialHealthHeader = styled.View`
  width: 100%;
  padding: 16px;

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

export const KnowMoreButton = styled.TouchableOpacity`

`

export const ScoreContainer = styled.View`
  padding: 0 16px;
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

export const DetailsButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;


  display: flex;
  align-items: center;
  justify-content: center;

  `

export const DetailsTitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
`