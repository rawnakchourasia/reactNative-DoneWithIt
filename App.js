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
  Dimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";
import { useWindowDimensions } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const orientation = useDeviceOrientation();
  console.log(useWindowDimensions());

  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
