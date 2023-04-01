import React, { useRef, useState } from "react";
import { Switch } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

import { Picker } from "@react-native-picker/picker";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  // return <ListingsScreen />;
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
