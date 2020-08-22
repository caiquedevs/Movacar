import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import { RussoOne_400Regular } from '@expo-google-fonts/russo-one';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    RussoOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
