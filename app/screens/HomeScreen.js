import React from "react";
import { View, StyleSheet } from "react-native";
import { ApplicationProvider, Text, Card } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/FontAwesome";

import Carousel from "react-native-reanimated-carousel";
function HomeScreen(props) {
  const carouselData = [
    {
      header: "Fun Drill: Beginner!",
      details: [
        "📍Location: Lapangan Tennis UPN!",
        "🕖 Time & Date: 19:00 - 12 December 2024",
        "🧑‍🦲Slots: 10",
        "💰Price: 100.000/pax",
      ],
    },
    {
      header: "Fun Drill: Intermediate!",
      details: [
        "📍Location: Lapangan Tennis UPN!",
        "🕖Time & Date: 18:00 - 15 December 2024",
        "🧑‍🦲Slots: 8",
        "💰Price: 150.000/pax",
      ],
    },
    {
      header: "Fun Drill: Advanced!",
      details: [
        "📍Location: Lapangan Tennis UPN!",
        "🕖Time & Date: 20:00 - 17 December 2024",
        "🧑‍🦲Slots: 5",
        "💰Price: 200.000/pax",
      ],
    },
  ];

  // Debugging: Check if carouselData has the expected structure
  console.log("Carousel Data:", carouselData);

  return (
    <View style={styles.profileview}>
      <View style={styles.profileContainer}>
        <Icon name="user" color="#ffff" size={60} style={styles.profileIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.text} category="h4">
            Welcome Back!
          </Text>
          <Text style={styles.text} category="h6">
            User
          </Text>
          <Text style={styles.text} category="h6">
            +62 88888888
          </Text>
        </View>
      </View>
      <View style={styles.upcomingSession}>
        <Text category="h4">Upcoming Sessions!</Text>
        <View style={styles.sessioncontainer}>
          <Carousel
            loop
            width={375} // Adjust width as needed
            height={250} // Adjust height as needed
            autoPlay={false} // Set to `true` for autoplay
            data={carouselData}
            scrollAnimationDuration={500} // Duration of the scroll animation
            renderItem={({ item, index }) => (
              <View key={index} style={styles.slide}>
                <Card style={styles.card}>
                  <Text style={styles.headerText}>{item.header}</Text>
                  {item.details.map((detail, detailIndex) => (
                    <Text key={detailIndex} style={styles.contentText}>
                      {detail}
                    </Text>
                  ))}
                </Card>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileview: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#47663B",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  profileIcon: {
    margin: 20,
  },
  textContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    marginBottom: 5,
    color: "white",
  },
  upcomingSession: {
    padding: 10,
  },
  sessioncontainer: {
    height: 250, // Add height to make sure the swiper has a defined space
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Ensure each slide takes the full width
  },
  card: {
    width: "100%", // Adjust for responsive sizing
    maxWidth: 350, // Optional: Adjust the max width
    padding: 10,
    alignSelf: "center",
    backgroundColor: "#f8f9fa", // Optional: Add a background color for better visibility
    borderRadius: 8, // Optional: Add border radius for styling
    shadowColor: "#000", // Optional: Add shadow for better visual effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow effect
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 5,
  },
});

export default HomeScreen;
