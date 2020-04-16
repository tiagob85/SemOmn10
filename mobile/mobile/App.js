import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Statusbar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes/>
      <Text>Teste</Text>
    </>
  );
}


