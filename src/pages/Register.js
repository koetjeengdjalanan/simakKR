import React from "react";
import { render } from "react-dom";
import { View, Text } from "react-native";
import WebView from "react-native-webview";

export default class Register extends React.Component {
  render() {
    return <WebView source={{ uri: "http://103.119.54.169:21280/" }} />;
    // return <WebView source={{ uri: "https://kidsrepublic.sch.id" }} />;
  }
}
