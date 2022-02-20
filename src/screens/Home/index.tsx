import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { OpenButtonFinance } from '../../components/OpenButtonFinance'
import { ProductCard } from '../../components/ProductCard'

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
  ButtonTitle,
  Banner,
  BannerActionContainer,
  BannerMessage,
  Message,
  StartButton,
  StartTitle,
  ImageBanner,
  OtherInstitutionsTitle,
  ProductsContainer,
  OurProductsTitle,
} from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleOpenFinance() {
    navigation.navigate('SplashOne')
  }

  function handleGoToStatistics() {
    navigation.navigate('Statistics')
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

      <Banner>
        <BannerActionContainer>
          <BannerMessage>
            <Message>Falta pouco para você</Message>
            <Message>começar sua jornada na XP</Message>
          </BannerMessage>

          <StartButton>
            <StartTitle>
              COMEÇAR
            </StartTitle>
          </StartButton>

        </BannerActionContainer>

        <ImageBanner
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/pic.png?alt=media&token=9e5f4762-1926-467b-a389-1d607b24718f'
          }}
        />

      </Banner>

      <OtherInstitutionsTitle>
        Outras instituições
      </OtherInstitutionsTitle>

      <OpenButtonFinance
        onPress={handleOpenFinance}
      />

      <ProductsContainer>
        <OurProductsTitle>Nossos Produtos</OurProductsTitle>

        <ProductCard
          icon='air'
          title='Produtos'
          description='Fundos de Investimentos, Renda Fixa, Tesouro, COE, Previdência Privada'
        />

        <ProductCard
          icon='line-graph'
          title='Renda Variavel-Bolsa'
          description='Fundos de Investimentos, Renda Fixa, Tesouro, COE, Previdência Privada'
        />

        <ProductCard
          icon='heart-outlined'
          title='Seguros'
          description='Vida'
        />
      </ProductsContainer>

      {/* <OpenFinanceButton
        onPress={handleOpenMenu}
      >
        <ButtonTitle>Open Finances</ButtonTitle>
      </OpenFinanceButton>

      <OpenFinanceButton
        onPress={handleGoToStatistics}
      >
        <ButtonTitle>Estatísticas</ButtonTitle>
      </OpenFinanceButton> */}

      {/* <OpenFinanceButton
        onPress={handleGoToStatistics}
      >
        <ButtonTitle>Estatísticas</ButtonTitle>
      </OpenFinanceButton> */}

    </Container>
  )
}