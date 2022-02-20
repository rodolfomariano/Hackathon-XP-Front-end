import { Entypo } from '@expo/vector-icons'

import {
  Container,
  TransactionInfoContainer,
  IconContainer,
  TypeContainer,
  Title,
  Month,
  Value,
  AmountContainer,
  Separator,
} from './styled'

interface TransactionCardProps {
  title: string
  month: string
  value: number
}

export function TransactionCard({ title, month, value }: TransactionCardProps) {

  return (
    <Container>
      <TransactionInfoContainer>
        <IconContainer>

        </IconContainer>

        <TypeContainer>
          <Title>{title}</Title>
          <Month>{month}</Month>
        </TypeContainer>

      </TransactionInfoContainer>


      <AmountContainer>
        <Value>
          R$ {value}
        </Value>

        <Entypo name="chevron-small-right" size={28} color="#F7F7F7" />

      </AmountContainer>

      <Separator></Separator>
    </Container>
  )
}