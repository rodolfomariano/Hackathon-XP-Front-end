import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TransactionInfoContainer = styled.View`

  display: flex;
  align-items: center;
  flex-direction: row;
`

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-right: 16px;
`

export const TypeContainer = styled.View`

`

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const Month = styled.Text`
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.text_card};
  margin-top: 6px;
`

export const AmountContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Value = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const Separator = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.shape};
`