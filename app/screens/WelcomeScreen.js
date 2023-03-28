import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={7}
    >
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={require("../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell what you don't need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} />
        <AppButton title={"Register"} color={"secondary"} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: 600,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
