import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from '@expo/vector-icons'

import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  GoToBackButton,
  Content,
  ImageBanner,
  Title,
  Description,
  Footer,
  ProgressContainer,
  Circle,
  NextButton,
  NextButtonTitle,
  JumpButton,
  JumpButtonTitle,
  Icon
} from './styles'

export function SplashOne() {
  const [progress, setProgress] = useState(0)

  const navigation = useNavigation()

  function handleGoToBack() {
    progress === 0 && navigation.goBack()
    progress > 0 && setProgress(progress - 1)
  }

  function handleNext() {
    if (progress < 2) {
      return setProgress(progress + 1)
    }
    return navigation.navigate('HomeOpenFinance')
  }

  return (
    <Container>

      <GoToBackButton
        onPress={handleGoToBack}
      >
        <Ionicons name="arrow-back-sharp" size={32} color="#FBC105" />
      </GoToBackButton>

      <Content>
        {progress === 0 && (
          <ImageBanner
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/image_splash_one.png?alt=media&token=e10efbb7-f74a-45b3-bdc0-8ccf2c6ab6f5'
            }}
          />
        )}

        {progress === 1 && (
          <ImageBanner
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/image_splash_two.png?alt=media&token=886ffdfb-3005-4f1c-ab72-5dab501a609d'
            }}
          />
        )}

        {progress === 2 && (
          <ImageBanner
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/imagens-3dce0.appspot.com/o/image_splash_tree.png?alt=media&token=99093542-605d-46fb-8624-729082d22f61'
            }}
          />
        )}

        <Title>
          {progress === 0
            ? 'Como os sentimentos influenciam nossas escolhas financeiras?'
            : progress === 1
              ? 'Por que o Open Finance na XP é diferente?'
              : 'Fora o controle de gastos e recebimentos, como você se sente?'
          }

        </Title>

        <Description>
          {progress === 0
            ? 'Com seus dados compartilhados, a XP te mostrará o que suas movimentações financeiras dizem sobre você e como sua autopercepção impacta suas finanças.'
            : progress === 1
              ? 'Além de receber as melhores ofertas de produtos e serviços, acesse o termômetro da sua saúde financeira e receba dicas para prosperar financeiramente.'
              : 'Acompanhe sua evolução com gráficos. Além de fazer a gestão pessoal de finanças, identifique quando está otimista e sem preocupação em relação à sua vida financeira.'
          }

        </Description>

        <ProgressContainer>
          <Circle style={{ backgroundColor: `${progress === 0 ? '#DADADA' : '#3D3D3D'}`, marginRight: 4 }} />
          <Circle style={{ backgroundColor: `${progress === 1 ? '#DADADA' : '#3D3D3D'}`, marginRight: 4 }} />
          <Circle style={{ backgroundColor: `${progress === 2 ? '#DADADA' : '#3D3D3D'}` }} />
        </ProgressContainer>

      </Content>

      <Footer>
        <NextButton
          onPress={handleNext}
        >
          <NextButtonTitle>
            {progress === 2
              ? 'COMEÇAR AGORA'
              : 'CONTINUAR'
            }

          </NextButtonTitle>
        </NextButton>

        <JumpButton>
          <Icon>
            <FontAwesome name="circle-thin" size={20} color="#F7F7F7" />
          </Icon>

          <JumpButtonTitle>
            Pular essa etapa
          </JumpButtonTitle>
        </JumpButton>
      </Footer>

    </Container>
  )
}