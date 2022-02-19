
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'

import {
  Container,
  CardHeader,
  CardTitle,
  SeeMoreButton,
  SpanDescription,
  Span,
  PunctuationContainer,
  Punctuation,
  PunctuationBar,
  PunctuationStatus,
} from './styled'

export function CardSpent() {
  const [seeMoreIsOpen, setSeeMoreIsOpen] = useState(false)
  const [punctuation, setPunctuation] = useState(80)

  function handleSeeMore() {
    setSeeMoreIsOpen(!seeMoreIsOpen)
  }

  return (
    <Container>
      <CardHeader>
        <CardTitle>Habilidade</CardTitle>
        <SeeMoreButton
          onPress={handleSeeMore}
        >
          {seeMoreIsOpen
            ? <Entypo name="chevron-small-up" size={24} color="#F7F7F7" />
            : <Entypo name="chevron-small-down" size={24} color="#F7F7F7" />
          }

        </SeeMoreButton>
      </CardHeader>
      {seeMoreIsOpen && (
        <SpanDescription>
          <Span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quod molestias, aliquam dolores id iste a cum eos, officiis beatae perspiciatis veniam impedit deserunt magni natus provident tenetur fuga. Quasi?
          </Span>

          <PunctuationContainer>
            <Punctuation>Sua pontuação: 56</Punctuation>

            <PunctuationBar>
              <PunctuationStatus style={{ width: punctuation }} />
            </PunctuationBar>
          </PunctuationContainer>
        </SpanDescription>
      )

      }



    </Container>
  )
}