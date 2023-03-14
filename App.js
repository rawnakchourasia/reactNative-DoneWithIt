import { StatusBar as StatusBar1 } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Pressed!!!");
    console.log(require("./assets/favicon.png"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color={"#1e1e1e"}
        title="Click Me!"
        onPress={() => alert(StatusBar.currentHeight)}
      />
      <StatusBar1 style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
