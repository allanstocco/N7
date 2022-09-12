import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login";
import Home from "./screens/home";
import Handover from "./screens/handover";
import Stock from "./screens/stock";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          // screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Handover" component={Handover} />
          <Stack.Screen name="Stock" component={Stock} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
