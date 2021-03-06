import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import theme from '../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;

  background-color: ${({ theme }) => theme.colors.background};
`

export const HeaderContainer = styled.View`
  position: relative;
  width: 100%;
  margin-top: 36px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GoToBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
`

export const Main = styled.ScrollView`
  padding-left: 24px;
  padding-right: 24px;
`

export const SelectMonthContainer = styled.View`
  margin-top: 32px;
  

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SelectMonthContent = styled.View`
  width: 280px;
  margin-bottom: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const MonthTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 14px;
`

export const BackMonthButton = styled.TouchableOpacity`

`

export const NextMonthButton = styled.TouchableOpacity`

`

export const List = styled.ScrollView`
  margin-top: 48px;
  
`

export const GraphContainer = styled.View`
  position: relative;
  margin-top: 56px;
`

export const ResultContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResultTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Result = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const ScoreResultContainer = styled.View`

`

export const Span = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const ScoreTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 15px;
  margin-top: 8px;
`

export const SpanDescription = styled.Text`
  color: ${({ theme }) => theme.colors.icons};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  
`