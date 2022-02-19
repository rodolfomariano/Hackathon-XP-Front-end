import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  margin-top: 24px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  
`
export const HeaderContainer = styled.View`
  width: 100%;
  height: ${RFPercentage(12)}px;
  

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Avatar = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shape_200};
  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserDataContainer = styled.View`

`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`

export const SeeProfile = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
`

export const ActionContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ShowButton = styled.TouchableOpacity`
  color: ${({ theme }) => theme.colors.icons};
`

export const MenuButton = styled.TouchableOpacity`
  margin-right: 16px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.icons};
`

export const OpenFinanceButton = styled.TouchableOpacity`
  width: 150px;
  background-color: ${({ theme }) => theme.colors.shape_200};
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.icons};
`