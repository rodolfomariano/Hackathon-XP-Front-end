import { useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'

import {
  Container,
  Header,
  GoToBackButton,
  Title,
  Main,
  BannerContainer,
  Banner,
  BannerDescription,
  GenericButton,
  IconContainer,
  ButtonTextContainer,
  ButtonContent,
  ButtonTitle,
  ButtonDescription,
  CardFinancialHealth,
  CardFinancialHealthHeader,
  CardTitle,
  KnowMoreButton,
  ScoreContainer,
  ScoreResult,
  Span,
  ScoreResultBar,
  ScoreResultProgress,
  TotalScoreContainer,
  TotalScore,
  DetailsButton,
  DetailsTitleButton,
} from './styles'

export function HomeOpenFinance() {
  const [progress, setProgress] = useState(56)
  const navigation = useNavigation()

  function handleGoToBack() {
    navigation.navigate('Home')
  }

  function handleGoToFinancialHealth() {
    navigation.navigate('FinancialHealth')
  }

  return (
    <Container>
      <Header>
        <GoToBackButton
          onPress={handleGoToBack}
        >
          <Ionicons name="arrow-back-sharp" size={32} color="#FBC105" />
        </GoToBackButton>

        <Title>Open Finance</Title>
      </Header>

      <Main>
        <BannerContainer>
          <Banner />
        </BannerContainer>

        <BannerDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis voluptas omnis ullam consequuntur numquam libero iure ipsum quod iusto tempora voluptate, tempore atque autem error ea natus aut eaque. Error.
        </BannerDescription>

        <GenericButton>

          <ButtonContent>
            <IconContainer>
              <FontAwesome name="bank" size={24} color="#EEC02C" />
            </IconContainer>

            <ButtonTextContainer>
              <ButtonTitle>Meus compartilhamentos</ButtonTitle>
              <ButtonDescription>
                Gerencie seus compartilhamentos
              </ButtonDescription>

            </ButtonTextContainer>
          </ButtonContent>

          <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />

        </GenericButton>

        <GenericButton>

          <ButtonContent>
            <IconContainer>
              <AntDesign name="pluscircle" size={24} color="#EEC02C" />
            </IconContainer>

            <ButtonTextContainer>
              <ButtonTitle>Adicionar instituição</ButtonTitle>
              <ButtonDescription>
                Adicione novos dados
              </ButtonDescription>

            </ButtonTextContainer>
          </ButtonContent>

          <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />

        </GenericButton>

        <GenericButton>

          <ButtonContent>
            <IconContainer>
              <Entypo name="line-graph" size={24} color="#EEC02C" />
            </IconContainer>

            <ButtonTextContainer>
              <ButtonTitle>Acompanhe as suas estatísticas</ButtonTitle>
              <ButtonDescription>
                Gerencie suas finanças pessoais
              </ButtonDescription>

            </ButtonTextContainer>
          </ButtonContent>

          <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />

        </GenericButton>

        <GenericButton>

          <ButtonContent>
            <IconContainer>
              <Entypo name="line-graph" size={24} color="#EEC02C" />
            </IconContainer>

            <ButtonTextContainer>
              <ButtonTitle>Economia da emoção</ButtonTitle>
              <ButtonDescription>
                Acompanhe seu bem-estar financeiro
              </ButtonDescription>

            </ButtonTextContainer>
          </ButtonContent>

          <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />

        </GenericButton>

        <CardFinancialHealth>
          <CardFinancialHealthHeader>
            <CardTitle>Saúde Financeira</CardTitle>
            <KnowMoreButton>
              <AntDesign name="infocirlceo" size={14} color="#F7F7F7" />
            </KnowMoreButton>
          </CardFinancialHealthHeader>

          <ScoreContainer>
            <ScoreResult>Sua pontuação: <Span>56</Span></ScoreResult>

            <ScoreResultBar>
              <ScoreResultProgress style={{ width: progress }} />
            </ScoreResultBar>

            <TotalScoreContainer>
              <TotalScore>Pontuação máxima: <Span>100</Span></TotalScore>

            </TotalScoreContainer>
          </ScoreContainer>

          <DetailsButton
            onPress={handleGoToFinancialHealth}
          >
            <DetailsTitleButton>
              Ver detalhes
            </DetailsTitleButton>
          </DetailsButton>
        </CardFinancialHealth>

      </Main>

    </Container>
  )
}