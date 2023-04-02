import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <AppTextInput
        autoCapitalize="none"
        icon="email"
        placeholder="Email"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress" // Only wroks on iOS, with this be used to auto fill from key-chain
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        icon="lock"
        placeholder="Password"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
