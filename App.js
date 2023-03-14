import { StatusBar } from "expo-status-bar";
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
        onPress={() => alert("Pressed")}
      />
      <Button
        title="Alert.alert()"
        onPress={() =>
          Alert.alert("Message", "Clicked on alert?", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />

      {/* Alert.prompt() works only on iOS as of now */}
      <Button
        title="Alert.prompt() works only on iOS"
        onPress={() =>
          Alert.prompt("Message", "Clicked on alert?", (text) =>
            console.log(text)
          )
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
