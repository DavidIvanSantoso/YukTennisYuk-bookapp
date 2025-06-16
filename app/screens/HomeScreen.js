import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ApplicationProvider, Text, Card } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import FooterComp from "../components/FooterComp";
function HomeScreen(props) {
  const carouselDataSession = [
    {
      header: "Fun Drill: Beginner!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 12 December 2024",
        slot: "15",
        price: "100.000",
      },
    },
    {
      header: "Fun Drill: Intermediate!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 14 December 2024",
        slot: "11",
        price: "150.000",
      },
    },
    {
      header: "Fun Drill: Advanced!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 15 December 2024",
        slot: "4",
        price: "250.000",
      },
    },
  ];
  const carouselDataEvents = [
    {
      header: "Fun Drill: Beginner!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 12 December 2024",
        slot: "15",
        price: "100.000",
      },
    },
    {
      header: "Fun Drill: Intermediate!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 14 December 2024",
        slot: "11",
        price: "150.000",
      },
    },
    {
      header: "Fun Drill: Advanced!",
      details: {
        location: "Lapangan Tennis UPN!",
        time: "19:00 - 15 December 2024",
        slot: "4",
        price: "250.000",
      },
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexEvent, setCurrentIndexEvent] = useState(0);
  // Debugging: Check if carouselData has the expected structure
  console.log("Carousel Data:", carouselDataSession);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.profileview}>
        <View style={styles.profileContainer}>
          <Icon
            name="user"
            color="#ffff"
            size={60}
            style={styles.profileIcon}
          />
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
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.upcomingSession}>
            <Text category="h4">Upcoming Sessions!</Text>
            <View style={styles.sessioncontainer}>
              <Carousel
                loop
                width={375}
                height={250}
                autoPlay={false}
                data={carouselDataSession}
                scrollAnimationDuration={500}
                onSnapToItem={(index) => setCurrentIndex(index)} // update index aktif
                renderItem={({ item, index }) => (
                  <View key={index} style={styles.slide}>
                    <Card style={styles.card}>
                      <Text style={styles.headerText}>{item.header}</Text>
                      <Text style={styles.contentText}>
                        📍Location: {item.details["location"]}
                      </Text>
                      <Text style={styles.contentText}>
                        🕖 Time & Date: {item.details["time"]}
                      </Text>
                      <Text style={styles.contentText}>
                        🧑‍🦲Slots: {item.details["slot"]}
                      </Text>
                      <Text style={styles.contentText}>
                        💰Price: {item.details["price"]}
                      </Text>
                    </Card>
                  </View>
                )}
              />
              <View style={styles.dotContainer}>
                {carouselDataSession.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      currentIndex === index && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.upcomingSession}>
            <Text category="h4">Events!</Text>
            <View style={styles.sessioncontainer}>
              <Carousel
                loop
                width={375} // Adjust width as needed
                height={250} // Adjust height as needed
                autoPlay={false} // Set to `true` for autoplay
                data={carouselDataEvents}
                onSnapToItem={(index) => setCurrentIndexEvent(index)} // update index aktif
                scrollAnimationDuration={500} // Duration of the scroll animation
                renderItem={({ item, index }) => (
                  <View key={index} style={styles.slide}>
                    <Card style={styles.card}>
                      <Text style={styles.headerText}>{item.header}</Text>
                      <Text style={styles.contentText}>
                        📍Location: {item.details["location"]}
                      </Text>
                      <Text style={styles.contentText}>
                        🕖 Time & Date: {item.details["time"]}
                      </Text>
                      <Text style={styles.contentText}>
                        🧑‍🦲Slots: {item.details["slot"]}
                      </Text>
                      <Text style={styles.contentText}>
                        💰Price: {item.details["price"]}
                      </Text>
                    </Card>
                  </View>
                )}
              />
              <View style={styles.dotContainer}>
                {carouselDataEvents.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      currentIndexEvent === index && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <TouchableOpacity style={styles.floatingcontact}>
          <Icon
            name="whatsapp"
            color="#ffff"
            size={27}
            style={styles.profileIcon}
          />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#E8ECD7",
    flex: 1,
  },
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
    padding: 15,
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
  floatingcontact: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    position: "absolute",
    right: 20,
    height: 65,
    bottom: 40,
    backgroundColor: "#47663B",
    borderRadius: 100,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#47663B", // ganti sesuai warna tema kamu
    width: 10,
    height: 10,
  },
});

export default HomeScreen;
