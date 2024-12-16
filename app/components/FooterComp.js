import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookScreen from "../screens/BookScreen";
import SettingScreen from "../screens/SettingScreen";
import HistoryScreen from "../screens/HistoryScreen";
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
          } else if (route.name === "History") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          }

          return (
            <View
              style={[
                styles.iconcontainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Ionicons name={iconName} size={25} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "#e8ecd7",
        tabBarInactiveTintColor: "white",
        tabBarStyle: styles.tabbar,
        tabBarItemStyle: styles.tabbaritem,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Book" component={BookScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#1f4529",
    height: 60,
    borderRadius: 30,
    marginHorizontal: 30,
    marginBottom: 10,
    position: "absolute",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  tabbaritem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});
export default FooterComp;
