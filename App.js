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

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  // return <ListingsScreen />;
  return (
    <Screen>
      <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        selectionColor="black"
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </Screen>
  );
}
