import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
