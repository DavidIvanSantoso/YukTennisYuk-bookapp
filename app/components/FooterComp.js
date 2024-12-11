import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
} from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookScreen from "../screens/BookScreen";
const Tab = createBottomTabNavigator();

function FooterComp(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Book") {
            iconName = focused ? "tennisball" : "tennisball-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#47663B",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Book" component={BookScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
export default FooterComp;
