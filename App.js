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
  TouchableNativeFeedback, //This works only on Android, in iOS it throws error
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Pressed!!!");
    console.log(require("./assets/favicon.png"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Welcome to React Native! loop lplp m h hhjjhh ggt ggggu u u i i ioooopp
        g tt f c yg gh gh v g gf gg h hgh gh gy ft v g fgf h{" "}
      </Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableHighlight onPress={handlePress}>
        <Image
          blurRadius={10}
          fadeDuration={1000} // in millisec, only works on android
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{ height: 100, width: 200, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>

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
