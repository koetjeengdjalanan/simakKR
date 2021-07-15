import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Input, Link, Button, Gap } from "../components";

const Login = () => {
  return (
    <View style={styles.page}>
      <Image source={require("../assets/illustration/logo_sd.png")}></Image>
      <Text style={styles.title}>
        {"Login To our\nDigital Academic System"}
      </Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot Password?" size="{12}" />
      <Button title="Sign In" onPress={() => alert("Nah Lo Belom Ada Apa2")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#000000",
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
  },
});
