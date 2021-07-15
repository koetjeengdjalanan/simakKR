import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  const [border, setBorder] = useState("#000");
  const onFocusForm = () => {
    setBorder("#CCC");
  };
  const onBlurForm = () => {
    setBorder("#000");
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => (
    {
      padding: 12,
      borderBottomWidth: 1,
      borderColor: "#000000",
    }
  ),
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 6,
  },
});
