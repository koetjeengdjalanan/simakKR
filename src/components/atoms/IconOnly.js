import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackIcon from "../../assets/vector/BackIcon";
import MenuBar from "../../assets/vector/MenuBar";

const IconOnly = ({ onPress, icon }) => {
  const Icon = () => {
    if (icon === "menubar") {
      return <MenuBar />;
    }
    if (icon === "backicon") {
      return <BackIcon />;
    }
    return <BackIcon />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
