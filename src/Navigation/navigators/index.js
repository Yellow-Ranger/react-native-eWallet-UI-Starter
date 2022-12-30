import React from "react";
import {
  DarkTheme,
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import { StatusBar, useColorScheme, Appearance } from "react-native";
import Stacks from "./Stacks";

export default function AppNavigator() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* Use TabStacks or Stacks below to display the bottom tabs or not */}
      <Stacks />
      {/* <TabStacks /> */}
    </NavigationContainer>
  );
}
