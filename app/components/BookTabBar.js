import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomTabBar = ({ tabs, selectedIndex, onSelect }) => {
  return (
    <View style={styles.tabBarContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => onSelect(index)}
        >
          <Text
            style={[
              styles.tabText,
              selectedIndex === index && styles.selectedTabText,
            ]}
          >
            {tab.title}
          </Text>
          {selectedIndex === index && <View style={styles.indicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#47663B",
    borderRadius: 10,
    margin: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  selectedTabText: {
    color: "#e8ecd7",
    fontWeight: "bold",
  },
  indicator: {
    marginTop: 5,
    width: 100, // Customize the indicator's length
    height: 4, // Customize the indicator's thickness
    backgroundColor: "#e8ecd7", // Customize the indicator's color
    borderRadius: 2,
  },
});

export default CustomTabBar;
