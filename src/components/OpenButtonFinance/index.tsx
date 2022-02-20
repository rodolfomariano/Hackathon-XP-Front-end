import React from 'react'
import { Entypo } from '@expo/vector-icons'

import { TouchableOpacityProps } from 'react-native'

import {
  OpenButtonFinanceContainer,
  Content,
  IconContainer,
  Icon,
  ContentInfo,
  Title,
  Message,
} from './styles'

interface OpenButtonFinanceProps extends TouchableOpacityProps {
  onPress: () => void
}

export function OpenButtonFinance({ onPress, ...rest }: OpenButtonFinanceProps) {
  return (
    <OpenButtonFinanceContainer onPress={onPress} {...rest}>
      <Content>
        <IconContainer>
          <Icon
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/users.png?alt=media&token=479ef1ae-710a-4ee6-876c-f13ae46194f9'
            }}
          />
        </IconContainer>

        <ContentInfo>
          <Title>Open Finance</Title>

          <Message>
            Acesse os seus dados entre instituições financeiras.
          </Message>
        </ContentInfo>
      </Content>

      <Entypo name="chevron-small-right" size={32} color="#F7F7F7" />

    </OpenButtonFinanceContainer>
  )
}