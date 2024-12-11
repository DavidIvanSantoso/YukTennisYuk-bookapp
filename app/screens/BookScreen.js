import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import { Tab, TabBar, Text, Card, List } from "@ui-kitten/components";
import { useState } from "react";

function BookScreen(props) {
  const [filter, setFilter] = useState(0);
  const listdata = [
    {
      id: 1,
      header: "Fun Drill: Beginner!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 12 December 2024",
        slot: "15",
        price: "100.000",
      },
    },
    {
      id: 2,
      header: "Fun Drill: Intermediate!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 14 December 2024",
        slot: "11",
        price: "150.000",
      },
    },
    {
      id: 3,
      header: "Fun Drill: Advanced!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 15 December 2024",
        slot: "4",
        price: "250.000",
      },
    },
    {
      id: 4,
      header: "Fun Drill: Advanced!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 15 December 2024",
        slot: "4",
        price: "250.000",
      },
    },
  ];
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.titlecontainer}>
        <Text category="h4" style={styles.text}>
          Choose Sessions!
        </Text>
      </View>
      <View style={styles.filtercontainer}>
        <TabBar
          selectedIndex={filter}
          onSelect={(index) => setFilter(index)}
          style={styles.tabbar}
        >
          <Tab
            title="Fun Drill"
            style={[
              styles.tab,
              filter === 0 && styles.selectedTab, // Apply background color for selected tab
            ]}
            titleStyle={
              filter === 0 ? styles.selectedTabTitle : styles.tabTitle
            }
          />
          <Tab
            title="Fun Game"
            style={[
              styles.tab,
              filter === 1 && styles.selectedTab, // Apply background color for selected tab
            ]}
            titleStyle={
              filter === 1 ? styles.selectedTabTitle : styles.tabTitle
            }
          />
        </TabBar>
      </View>
      <View style={styles.listcontainer}>
        <List
          style={{ backgroundColor: "#E8ECD7" }}
          data={listdata}
          keyExtractor={(item) => item.id} // Use unique ID for each item
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Text style={styles.headerText}>{item.header}</Text>
              <Text style={styles.contentText}>
                📍 Location: {item.details.location}
              </Text>
              <Text style={styles.contentText}>
                🕖 Time & Date: {item.details.time}
              </Text>
              <Text style={styles.contentText}>
                🧑‍🦲 Slots: {item.details.slot}
              </Text>
              <Text style={styles.contentText}>
                💰 Price: {item.details.price}
              </Text>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#E8ECD7",
    flex: 1,
  },
  titlecontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#47663B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    padding: 20,
    textAlign: "center",
    color: "#E8ECD7",
  },
  filtercontainer: {
    marginTop: 15,
    backgroundColor: "#47663B",
  },
  tabbar: {
    backgroundColor: "#47663B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tab: {
    flex: 1,
  },
  tabTitle: {
    color: "#E8ECD7",
  },
  selectedTabTitle: {
    color: "#47663B",
    backgroundColor: "black",
  },
  listcontainer: {
    flex: 1,
    padding: 20,
  },
  card: {
    width: "100%", // Adjust for responsive sizing
    maxWidth: 350, // Optional: Adjust the max width
    padding: 10,
    marginBottom: 15,
    alignSelf: "center",
    backgroundColor: "#f8f9fa", // Optional: Add a background color for better visibility
    borderRadius: 8, // Optional: Add border radius for styling
    shadowColor: "#000", // Optional: Add shadow for better visual effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow effect
  },
});
export default BookScreen;