
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'

import {
  Container,
  CardHeader,
  CardTitle,
  TextContent,
  SeeMoreButton,
  SpanDescription,
  SpanDescriptionTitle,
  Span,
  PunctuationContainer,
  Punctuation,
  SpanPunctuation,
  PunctuationBar,
  TotalScoreContainer,
  TotalScore,
  PunctuationStatus,
} from './styled'

interface CardSpentProps {
  cardTitle: string
  abilityScore: number
  behavioralScore: number
}

export function CardSpent({ cardTitle, abilityScore, behavioralScore }: CardSpentProps) {
  const [seeMoreIsOpen, setSeeMoreIsOpen] = useState(false)

  const [abilityPunctuation, setAbilityPunctuation] = useState(abilityScore)
  const [behavioralPunctuation, setBehavioralPunctuation] = useState(behavioralScore)

  function handleSeeMore() {
    setSeeMoreIsOpen(!seeMoreIsOpen)
  }

  return (
    <Container
      onPress={handleSeeMore}
    >
      <CardHeader>
        <TextContent>
          <CardTitle>{cardTitle}</CardTitle>

        </TextContent>
        <SeeMoreButton
          onPress={handleSeeMore}
        >
          {seeMoreIsOpen
            ? <Entypo name="chevron-small-down" size={24} color="#F7F7F7" />
            : <Entypo name="chevron-small-right" size={24} color="#F7F7F7" />
          }

        </SeeMoreButton>
      </CardHeader>
      {seeMoreIsOpen && (
        <SpanDescription>
          <SpanDescriptionTitle>
            Habilidade:
          </SpanDescriptionTitle>

          <Span>
            Avalia a sua capacidade de buscar e entender informações importantes para a vida financeira.
          </Span>

          <PunctuationContainer>
            <Punctuation>Sua pontuação: <SpanPunctuation>{abilityPunctuation}</SpanPunctuation></Punctuation>

            <PunctuationBar>
              <PunctuationStatus style={{ width: `${abilityPunctuation}%` }} />
            </PunctuationBar>

            <TotalScoreContainer>
              <TotalScore>Pontuação máxima: <SpanPunctuation>100</SpanPunctuation></TotalScore>
            </TotalScoreContainer>

          </PunctuationContainer>

          <SpanDescriptionTitle>
            Comportamento:
          </SpanDescriptionTitle>

          <Span>
            Avalia as suas atitudes, principalmente com relação à disciplina e controle.
          </Span>

          <PunctuationContainer>
            <Punctuation>Sua pontuação: <SpanPunctuation>{behavioralPunctuation}</SpanPunctuation></Punctuation>

            <PunctuationBar>
              <PunctuationStatus style={{ width: `${behavioralPunctuation}%` }} />
            </PunctuationBar>

            <TotalScoreContainer>
              <TotalScore>Pontuação máxima: <SpanPunctuation>100</SpanPunctuation></TotalScore>
            </TotalScoreContainer>

          </PunctuationContainer>
        </SpanDescription>
      )

      }



    </Container>
  )
}