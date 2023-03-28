import React from "react";
import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for Sale"
        subTitle="$100"
        image={require("./app/assets/sale_jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
