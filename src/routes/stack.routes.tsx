import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../screens/Home'
import { FinancialHealth } from '../screens/FinancialHealth'
import { Statistics } from '../screens/Statistics'
import { SplashOne } from '../screens/SplashOne'

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
    </Navigator>
  )
}