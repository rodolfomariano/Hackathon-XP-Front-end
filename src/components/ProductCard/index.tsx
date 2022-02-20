import { Entypo, FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Content,
  Details,
  Title,
  Description,
  Divider
} from './styles'

interface ProductCardProps {
  icon: string
  title: string
  description: string
}


export function ProductCard({ icon, title, description }: ProductCardProps) {
  return (
    <Container>

      <Content>
        <Entypo name={icon} size={24} color="#EEC02C" />

        <Details>
          <Title>{title}</Title>

          <Description>
            {description}
          </Description>

        </Details>

      </Content>

      <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />

      <Divider />
    </Container>
  )
}