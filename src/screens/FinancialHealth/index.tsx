
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { CardSpent } from '../../components/CardSpent';
import { PieChart } from 'react-native-svg-charts'

import { Ionicons, Entypo } from '@expo/vector-icons';

import { useData } from '../../hooks/data'

import {
  Container,
  HeaderContainer,
  GoToBackButton,
  HeaderTitle,
  Main,
  SelectMonthContainer,
  SelectMonthContent,
  MonthTitle,
  BackMonthButton,
  NextMonthButton,
  List,
  GraphContainer,
  ResultContainer,
  ResultTitle,
  Result,
  ScoreResultContainer,
  ScoreTitle,
  Span,
  Description,
  SpanDescription,
} from './styled'


export function FinancialHealth() {
  const navigation = useNavigation()

  const { punctuation } = useData()

  const data = [punctuation, 100]

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)


  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: randomColor(),
    },
  }))

  function handleGoToBack() {
    navigation.goBack()
  }


  return (
    <Container>
      <HeaderContainer>
        <GoToBackButton
          onPress={handleGoToBack}
        >
          <Ionicons name="arrow-back-sharp" size={32} color="#FBC105" />
        </GoToBackButton>

        <HeaderTitle>
          Saúde Financeira
        </HeaderTitle>
      </HeaderContainer>

      <Main>


        <GraphContainer>
          <ResultContainer>
            <ResultTitle>Sua pontuação:</ResultTitle>
            <Result>{punctuation}</Result>
          </ResultContainer>

          <PieChart
            data={pieData}
            style={{ height: 200 }}
            innerRadius='80%'
          />
        </GraphContainer>

        <SelectMonthContainer>
          <SelectMonthContent>
            <BackMonthButton>
              <Entypo name="chevron-small-left" size={28} color="#F7F7F7" />
            </BackMonthButton>

            <MonthTitle>Fevereiro/2022</MonthTitle>

            <NextMonthButton>
              <Entypo name="chevron-small-right" size={28} color="#F7F7F7" />
            </NextMonthButton>
          </SelectMonthContent>

        </SelectMonthContainer>

        <ScoreResultContainer>
          <ScoreTitle>Seu resultado: <Span>35</Span></ScoreTitle>

          <Description>
            <SpanDescription>Ruim: </SpanDescription>
            Hoje, você sente que suas finanças te controlam, te limitam e que por isso elas são um grande motivo de estresse. Isso é um tema constante de preocupação e afeta muito o seu ambiente familiar. Para melhorar suas finanças, seu foco deve ser sair das dívidas, se organizar e ampliar a renda. Conte com as dicas XP para corientação e auxílio na educação financeira.
          </Description>
        </ScoreResultContainer>


        <List>
          <CardSpent
            cardTitle='O que suas movimentações financeiras dizem sobre você?'
            abilityScore={22}
            behavioralScore={48}
          />

          <CardSpent
            cardTitle='Como sua autopercepção impacta nas suas finanças?'
            abilityScore={48}
            behavioralScore={52}
          />

        </List>

      </Main>
    </Container>

  )
}