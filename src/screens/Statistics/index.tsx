import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { LineChart, Grid } from 'react-native-svg-charts'
import { TransactionCard } from '../../components/TransactionCard';

import * as shape from 'd3-shape'

import {
  Container,
  HeaderContainer,
  HeaderContent,
  GoToBackButton,
  HeaderTitle,
  SelectData,
  Data,
  Main,
  GraphCard,
  Month,
  GraphContent,
  CardHeader,
  PlannerExpenses,
  ExpensesTitle,
  SpanPlannerExpenses,
  CurrentSpendingContainer,
  SpendingTitle,
  SpanCurrentSpending,
  TransactionsContainer,
  TransactionsHeader,
  TransactionHeaderTitle,
  SeeAllTransactions,
  SeeAllTitle
} from './styles'

export function Statistics() {
  const navigation = useNavigation()

  const data = [10, 20, 10, 18, 14, 30]
  const data2 = [10, 15, 10, 10, 14, 30]

  function handleGoToBack() {
    navigation.goBack()
  }

  const transactionList = [
    {
      id: '1',
      title: 'Energia',
      date: '20 de abril de 2022',
      value: 88.00,
    },
    {
      id: '2',
      title: 'ifood',
      date: '20 de abril de 2022',
      value: 120
    },
    {
      id: '3',
      title: 'Água',
      date: '20 de abril de 2022',
      value: 88.00,
    },
    {
      id: '4',
      title: 'Aluguel',
      date: '20 de abril de 2022',
      value: 120
    },
  ]

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <GoToBackButton
            onPress={handleGoToBack}
          >
            <Ionicons name="chevron-back" size={24} color="#F7F7F7" />
          </GoToBackButton>

          <HeaderTitle>Estatísticas</HeaderTitle>

          <SelectData>
            <Data>Mês Atual</Data>
            <Entypo name="chevron-small-down" size={24} color="#F7F7F7" />
          </SelectData>
        </HeaderContent>
      </HeaderContainer>

      <Main>
        <GraphCard>
          <Month>Fevereiro 2022</Month>

          <CardHeader>
            <PlannerExpenses>
              <ExpensesTitle>Gastos planejados</ExpensesTitle>
              <SpanPlannerExpenses />
            </PlannerExpenses>

            <CurrentSpendingContainer>
              <SpendingTitle>Gastos atuais</SpendingTitle>
              <SpanCurrentSpending />
            </CurrentSpendingContainer>
          </CardHeader>

          <GraphContent>
            <LineChart
              style={{ height: 140, width: 270 }}
              data={data}
              contentInset={{ top: 30, bottom: 30 }}
              curve={shape.curveNatural}
              svg={{ stroke: 'rgba(244, 116, 65, 0.5)' }}
            >
              <Grid />
            </LineChart>

            <LineChart
              style={{ height: 140, width: 270, position: 'absolute' }}
              data={data2}
              contentInset={{ top: 30, bottom: 30 }}
              curve={shape.curveNatural}
              svg={{ stroke: 'rgba(134, 65, 244, 0.9)' }}
            >

            </LineChart>

          </GraphContent>

        </GraphCard>

        <TransactionsContainer>
          <TransactionsHeader>
            <TransactionHeaderTitle>
              Histórico de Transações
            </TransactionHeaderTitle>

            <SeeAllTransactions>
              <SeeAllTitle>Ver tudo</SeeAllTitle>
            </SeeAllTransactions>
          </TransactionsHeader>

          <ScrollView>
            {transactionList.map(item => (
              <TransactionCard
                key={item.id}
                title={item.title}
                month={item.date}
                value={item.value}
              />
            ))}
          </ScrollView>


        </TransactionsContainer>

      </Main>

    </Container>
  )
}