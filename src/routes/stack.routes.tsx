import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../screens/Home'
import { FinancialHealth } from '../screens/FinancialHealth'
import { Statistics } from '../screens/Statistics'
import { SplashOne } from '../screens/SplashOne'
import { HomeOpenFinance } from '../screens/HomeOpenFinance'
import { EconomyEmotion } from '../screens/EconomyEmotion'

export function StackRouters() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="SplashOne"
        component={SplashOne}
      />

      <Screen
        name="FinancialHealth"
        component={FinancialHealth}
      />

      <Screen
        name="Statistics"
        component={Statistics}
      />

      <Screen
        name="HomeOpenFinance"
        component={HomeOpenFinance}
      />

      <Screen
        name="EconomyEmotion"
        component={EconomyEmotion}
      />
    </Navigator>
  )
}