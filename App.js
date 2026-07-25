import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';

import MyNavegation from './app/MyNavegation';


const artistTheme = {
  ...MD3DarkTheme, 
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#ff0077', 
    background: '#121212', 
    surface: '#242424', 
  },
};

export default function App() {
  return (
    <NavigationContainer>
      
      <PaperProvider theme={artistTheme}>
        <MyNavegation />
      </PaperProvider>
    </NavigationContainer>
  );
}
