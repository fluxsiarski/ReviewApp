// import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import Feedback from "./screens/Feedback";

const Stack = createNativeStackNavigator();

const getFont = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or some loading component
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <Button title="Leave feedback!" />,
          }}
        />
        <Stack.Screen name="Feedback" component={Feedback} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
