import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";

const Home = ({ animatedStyle }) => {
  const theme = useTheme();

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        ...animatedStyle,
      }}
    >
      <Text>Home Screen</Text>
    </Animated.View>
  );
};

export default Home;
