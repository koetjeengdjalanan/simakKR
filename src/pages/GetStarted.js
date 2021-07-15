import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { ILGedung } from "../assets/illustration";
import { Button } from "../components/atoms/";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={ILGedung} style={styles.page}>
      <View>
        <Image source={require("../assets/illustration/logo_sd.png")}></Image>
        <Text style={styles.title}>Nurturing Leader Of Tommorow</Text>
      </View>
      <View>
        <Button
          title="Daftar"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={{ height: 16 }} />
        <Button
          type="secondary"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 91,
    // fontFamily: 'Nunito-SemiBold',
  },
});
