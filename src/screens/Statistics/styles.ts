import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  
  background-color: ${({ theme }) => theme.colors.background};
`

export const HeaderContainer = styled.View`
  width: 100%;
  height: ${RFPercentage(32)}px;
  margin-top: 24px;
`

export const HeaderContent = styled.View`
  position: relative;
  padding-top: 24px;
  padding-left: 64px;
  padding-right: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

export const GoToBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 32px;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
`

export const SelectData = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
  padding: 4px 8px;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Data = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 8px;
`

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_200};
  padding-left: 24px;
  padding-right: 24px;
`

export const GraphCard = styled.View`
  width: 100%;
  /* height: 200px; */
  background-color: ${({ theme }) => theme.colors.shape_200}; 
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.background};
  margin-top: -130px;
  border-radius: 16px;
  padding: 16px;

`

export const Month = styled.Text`
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.light};
`

export const GraphContent = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
`

export const CardHeader = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const PlannerExpenses = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ExpensesTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 12px;
`

export const SpanPlannerExpenses = styled.View`
  width: 20px;
  height: 5px;
  background-color: rgba(134, 65, 244, 0.9);
  margin-left: 8px;
  border-radius: 2.5px;
`

export const CurrentSpendingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SpendingTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 12px;
`

export const SpanCurrentSpending = styled.View`
  width: 20px;
  height: 5px;
  background-color: rgba(244, 116, 65, 0.5);
  margin-left: 8px;
  border-radius: 2.5px;
`

export const TransactionsContainer = styled.ScrollView`
  padding-bottom: 32px;
`

export const TransactionsHeader = styled.View`
  width: 100%;
  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TransactionHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const SeeAllTransactions = styled.TouchableOpacity`

`

export const SeeAllTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`