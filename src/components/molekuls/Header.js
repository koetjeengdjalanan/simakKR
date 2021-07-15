import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { BackIcon, LogoSVG, NotificationBell } from "../../assets";
import { Fire } from "../../config";

const Header = ({ navigation }) => {
  const signOut = () => {
    Fire.auth()
      .signOut()
      .then((res) => {
        console.log("Signing Out");
        navigation.replace("GetStarted");
      })
      .catch((err) => {
        const errormessage = err.message;
        showMessage({
          message: errormessage,
          type: "default",
          backgroundColor: "#E06379",
          COLOR: "white",
        });
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <LogoSVG width="50" height="48" />
      <TouchableOpacity onPress={signOut}>
        <NotificationBell />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
