import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ComingSoon } from "../../assets";
import Header from "../../components/molekuls/Header";

const Dashboard = () => {
  return (
    <View style={styles.foreground}>
      <View style={styles.sheet}>
        <View style={styles.page}>
          <Header />
          <View style={styles.content}>
            <ComingSoon />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  foreground: {
    flex: 1,
    backgroundColor: "#2BA3DC",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  sheet: {
    flex: 1,
    margin: 14,
    borderRadius: 10,
    backgroundColor: "#69CEED",
    justifyContent: "center",
  },
  page: {
    flex: 1,
    margin: 9,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 13,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginTop: 20,
  },
});
