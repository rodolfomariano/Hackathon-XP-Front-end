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
          <Banner
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/banneOpenFinance.png?alt=media&token=c20f0f43-eb31-4cc3-a985-1b38c3ee3257'
            }}
          />
        </BannerContainer>

        <BannerDescription>
          Além do controle e gerenciamento de um jeito fácil e seguro, aqui na XP você conta com as melhores dicas e ofertas para cultivar hábitos desejáveis de um bem estar financeiro.
        </BannerDescription>

        <GenericButton>

          <ButtonContent>
            <IconContainer>
              <Entypo name="heart-outlined" size={24} color="#EEC02C" />
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
              <AntDesign name="pluscircleo" size={24} color="#EEC02C" />
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