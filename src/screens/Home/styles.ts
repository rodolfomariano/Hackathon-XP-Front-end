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

export const Banner = styled.View`
  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.banner};
  margin-top: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`


export const BannerActionContainer = styled.View`

`

export const BannerMessage = styled.View`
  margin-bottom: 16px;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const StartButton = styled.TouchableOpacity`
  width: 170px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.icons};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StartTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  
`

export const ImageBanner = styled.Image`
  width: 90px;
  height: 100px;
  margin-bottom: -14px;
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

export const OtherInstitutionsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const ProductsContainer = styled.View`
  margin-top: 32px;
`

export const OurProductsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.poppins_regular};
  /* margin-bottom: 16px; */
`