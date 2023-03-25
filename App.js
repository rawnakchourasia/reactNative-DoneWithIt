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

export default function App() {
  const orientation = useDeviceOrientation();
  console.log(useWindowDimensions());

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // This can also be row-reverse, column and column-reverse
        justifyContent: "center", // Works like in css
        alignItems: "center", //The default value is stretch, and can be changed to baseline, flex-end
        alignContent: "center", // This is only used when flexWrap is used
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexBasis: 100, // This is like width on portrait mode, and like height on landscape mode
          // width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          flexGrow: 1, // This behaves same as flex:1
          width: 100,
          height: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          // flexShrink: 1, // This behaves same as flex:-1
          width: 400,
          height: 100,
        }}
      ></View>
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
