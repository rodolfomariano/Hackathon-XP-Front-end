import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Text } from 'react-native'
import {
  Container,
  HeaderContainer,
  UserContainer,
  Avatar,
  UserDataContainer,
  UserName,
  SeeProfile,
  ShowButton,
  MenuButton,
  ActionContainer,
  OpenFinanceButton,
  ButtonTitle
} from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleOpenMenu() {
    navigation.navigate('FinancialHealth')
  }

  return (
    <Container>
      <HeaderContainer>
        <UserContainer>
          <Avatar>
            <AntDesign name='user' size={24} color="#EEC02C" />
          </Avatar>

          <UserDataContainer>
            <UserName>Olá, User</UserName>
            <SeeProfile>Veja seu perfil</SeeProfile>
            <SeeProfile>Agencia: 00001 - Conta: 21212</SeeProfile>
          </UserDataContainer>

        </UserContainer>

        <ActionContainer>
          <ShowButton>
            <AntDesign name='eyeo' size={24} color="#EEC02C" />
          </ShowButton>

          <MenuButton>
            <Entypo name="dots-three-vertical" size={24} color="#EEC02C" />
          </MenuButton>

        </ActionContainer>
      </HeaderContainer>

      <OpenFinanceButton
        onPress={handleOpenMenu}
      >
        <ButtonTitle>Open Finances</ButtonTitle>
      </OpenFinanceButton>

    </Container>
  )
}