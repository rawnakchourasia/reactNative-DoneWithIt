import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

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
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress" // Only wroks on iOS, with this be used to auto fill from key-chain
              name="email"
            />
            <AppFormField
              autoCapitalize="none"
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              name="password"
            />

            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
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
