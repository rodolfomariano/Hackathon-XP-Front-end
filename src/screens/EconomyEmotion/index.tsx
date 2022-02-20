import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import {
  Container,
  Header,
  GoToBackButton,
  Title,
  EmotionContainer,
  QuestionTitle,
  EmotionSelectContainer,
  EmotionButton,
  EmojiImage,
  EmotionTitle,
  CardFinancialHealthHeader,
  CardTitle,
  CardDescription,
  KnowMoreButton,
  ScoreContainer,
  ScoreResult,
  Span,
  ScoreResultBar,
  ScoreResultProgress,
  TotalScoreContainer,
  TotalScore,
  TipContainer,
  TipTitle,
  TipDescription,
  TipCard,
  TipCarTitle,
  TrpCardDescription,
  TipButton,
  ButtonTitle
} from './styled'

export function EconomyEmotion() {
  const navigation = useNavigation()
  const [progress, setProgress] = useState(56)

  function handleGoToBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <GoToBackButton
          onPress={handleGoToBack}
        >
          <Ionicons name="arrow-back-sharp" size={32} color="#FBC105" />
        </GoToBackButton>

        <Title>Economia da Emoção</Title>
      </Header>

      <EmotionContainer>
        <QuestionTitle>Como está se sentindo em relação as suas finanças esse mês?</QuestionTitle>

        <EmotionSelectContainer>
          <EmotionButton>
            <EmojiImage
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/Emoji%20-%20leve.png?alt=media&token=299f22ff-1161-4944-8b57-89d3a72b04d6'
              }}
            />

            <EmotionTitle>Leve</EmotionTitle>
          </EmotionButton>

          <EmotionButton>
            <EmojiImage
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/Emoji%20otimista.png?alt=media&token=1f7f6923-3301-489b-96d7-3717199c18e8'
              }}
            />

            <EmotionTitle>Otimista</EmotionTitle>
          </EmotionButton>

          <EmotionButton>
            <EmojiImage
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/Emoji-Group.png?alt=media&token=f59c5277-4ef5-40d0-b797-34164fc43fce'
              }}
            />

            <EmotionTitle>Pessimista</EmotionTitle>
          </EmotionButton>

          <EmotionButton>
            <EmojiImage
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/Emoji%20estressado.png?alt=media&token=0b29bf15-c90f-4775-9b86-9e7044cf650a'
              }}
            />

            <EmotionTitle>Estressado</EmotionTitle>
          </EmotionButton>

        </EmotionSelectContainer>
      </EmotionContainer>

      <CardFinancialHealthHeader>

        <CardTitle>Índice da sua saúde financeira</CardTitle>

        <KnowMoreButton>
          <AntDesign name="infocirlceo" size={14} color="#F7F7F7" />
        </KnowMoreButton>

      </CardFinancialHealthHeader>

      <CardDescription>
        O score da saúde financeira é calculado com base em 4 pilares:
        Habilidade, Comportamento, Segurança e Liberdade.
      </CardDescription>

      <ScoreContainer>
        <ScoreResult>Sua pontuação: <Span>56</Span></ScoreResult>

        <ScoreResultBar>
          <ScoreResultProgress style={{ width: `${progress}%` }} />
        </ScoreResultBar>

        <TotalScoreContainer>
          <TotalScore>Pontuação máxima: <Span>100</Span></TotalScore>

        </TotalScoreContainer>
      </ScoreContainer>

      <TipContainer>
        <TipTitle>Dicas e Ofertas</TipTitle>

        <TipDescription>
          Muitos compromissos financeiros podem tirar o sono.
          Conheça alguns produtos que podem atender suas necessidades do momento.
        </TipDescription>

        <TipCard>
          <TipCarTitle>Melhor opção de crédito</TipCarTitle>

          <TrpCardDescription>
            Contrate seu empréstimo agora para pagar aquela conta em atraso que tem juros mais alto. Hoje a taxa de juros do empréstimo está reduzida para você.
          </TrpCardDescription>

          <TipButton>
            <ButtonTitle>
              CLIQUE AQUI PARA SIMULAR
            </ButtonTitle>
          </TipButton>
        </TipCard>

        <TipCard>
          <TipCarTitle>Fique atento!</TipCarTitle>

          <TrpCardDescription>
            Nesse mês, os gastos no cartão já superaram a média que você costuma ter.
            O mês já está acabando! Segura os gastos aí. 😉
          </TrpCardDescription>

          <TipButton>
            <ButtonTitle>
              SAIBA MAIS
            </ButtonTitle>
          </TipButton>
        </TipCard>

      </TipContainer>




    </Container>
  )
}