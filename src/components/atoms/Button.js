import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import IconOnly from "./IconOnly";

const Button = ({ type, title, onPress, icon }) => {
  if (type === "icon-only") {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "secondary" ? "#2CA4DC" : "#6BCCEB",
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
