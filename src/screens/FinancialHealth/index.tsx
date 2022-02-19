
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
} from './styled'


export function FinancialHealth() {
  const navigation = useNavigation()

  const { punctuation } = useData()

  const data = [50, 10, 40, 95, 23]

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
          <Ionicons name="chevron-back" size={24} color="#F7F7F7" />
        </GoToBackButton>

        <HeaderTitle>
          Saude Financeira
        </HeaderTitle>
      </HeaderContainer>

      <Main>
        <SelectMonthContainer>
          <SelectMonthContent>
            <BackMonthButton>
              <Entypo name="chevron-small-left" size={32} color="#F7F7F7" />
            </BackMonthButton>

            <MonthTitle>Fevereiro/2022</MonthTitle>

            <NextMonthButton>
              <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />
            </NextMonthButton>
          </SelectMonthContent>

        </SelectMonthContainer>

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


        <List>
          <CardSpent />
          <CardSpent />

        </List>

      </Main>
    </Container>

  )
}