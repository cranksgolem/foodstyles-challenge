import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import StartScreen from './screens/StartScreen';
import { useFonts } from 'expo-font';
import SignupEmailScreen from './screens/SignupEmailScreen';
import { RootStackParamList } from './types';

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  }
}

const theme = extendTheme({
  colors: {
    orangish: "#fa7745",
    maize: "#f3c442",
    greyishBrown: "#434343",
    confirm: "#11ce90",
  },
  fontConfig: {
    ProximaNovaAlt: {
      100: {
        normal: "ProximaNovaAlt-Regular",
      },
      200: {
        normal: "ProximaNovaAlt-Semibold",
      },
      300: {
        normal: "ProximaNovaAlt-Bold",
      }
    }
  },
  fonts: {
    heading: "ProximaNovaAlt",
    body: "ProximaNovaAlt",
    mono: "ProximaNovaAlt",
  },
});

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    "ProximaNovaAlt-Regular": require("./assets/fonts/ProximaNovaAlt-Regular.ttf"),
    "ProximaNovaAlt-Semibold": require("./assets/fonts/ProximaNovaAlt-Semibold.ttf"),
    "ProximaNovaAlt-Bold": require("./assets/fonts/ProximaNovaAlt-Bold.ttf"),
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme} config={config}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="SignupEmailScreen" component={SignupEmailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
