import React from "react";
import { TextInput, StyleSheet } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  // return <ListingsScreen />;
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
