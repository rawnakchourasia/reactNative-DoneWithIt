import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => {
          <>
            <AppTextInput
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress" // Only wroks on iOS, with this be used to auto fill from key-chain
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
            />

            <AppButton title="Login" onPress={handleSubmit} />
          </>;
        }}
      </Formik>
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
