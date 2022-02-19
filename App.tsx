import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import theme from './src/global/styles/theme'

import { Routes } from './src/routes';
import { DataProvider } from './src/hooks/data';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor='transparent'
      />
      <DataProvider>
        <Routes />
      </DataProvider>
    </ThemeProvider>
  );
}

