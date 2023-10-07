
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Index from './src/views/BommonTab/index'

export default function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Index/>
    </NavigationContainer>
  );
}
