import React from 'react';
import { UserIdentify } from './src/pages/UserIdentify';
import {useFonts,
        Jost_400Regular,
        Jost_600SemiBold} from '@expo-google-fonts/jost';

import {View, Text,} from 'react-native';
import { Welcome } from './src/pages/Welcome';



export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded){

    <View>
      <Text>
        aguenta 
      </Text>
    </View>
   

  }
  return (
   
  
  <Welcome />
  
  );
}


