import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Splash,
  GetStarted,
  Register,
  Login,
  Dashboard,
  Bill,
  Setting,
  NewUser,
} from "../pages";
import { IconHome, IconBill, IconSetting } from "../assets";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator, FirstTime } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    // <Tab.Navigator tabBat={(props) => <BottomNavigator {...props} />}>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          paddingBottom: 20,
          bottom: 27,
          left: 27,
          right: 27,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 65,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Bill"
        component={Bill}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {focused ? (
                <IconBill width="24" height="28" fill="#0AA7D9" />
              ) : (
                <IconBill width="24" height="28" fill="#6BCCEB" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {focused ? (
                <IconHome width="32" height="38" fill="#0AA7D9" />
              ) : (
                <IconHome width="32" height="38" fill="#6BCCEB" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {focused ? (
                <IconSetting width="28" height="28" fill="#0AA7D9" />
              ) : (
                <IconSetting width="28" height="28" fill="#6BCCEB" />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    // <Stack.Navigator initialRouteName="Splash">
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerStyle: {
            backgroundColor: "#3cafe0",
          },
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstTime"
        component={FirstTime}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewUser"
        component={NewUser}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
