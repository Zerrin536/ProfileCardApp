import React from 'react';
import { useFonts } from 'expo-font';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ProfileScreen />;
}
