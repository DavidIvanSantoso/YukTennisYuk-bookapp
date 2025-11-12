import React, { useState } from "react";
import {
  Text,
  Avatar,
  Select,
  SelectItem,
  IndexPath,
  Button,
  Tooltip,
  Modal,
  Card,
} from "@ui-kitten/components";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

function BookDetail() {
  const [numPeople, setNumPeople] = useState("1");
  const options = ["1", "2", "3"];
  const [numPeopleIndex, setNumPeopleIndex] = useState(new IndexPath(0));
  const openGoogleMaps = (url) => {
    Linking.openURL(url);
  };
  //tooltip settings
  const [visible, setVisible] = useState(false);
  const renderAnchor = () => (
    <Pressable
      onPressIn={() => setVisible(true)} // Show tooltip on hold
      onPressOut={() => setVisible(false)}
    >
      <Avatar source={require("../assets/favicon.png")} style={styles.avatar} />
    </Pressable>
  );
  const selectedValue = numPeople.row + 1;
  return (
    <View style={styles.background}>
      <View style={styles.titlecontainer}>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "#EED3b1" }}>
          Fun Drill: Beginner
        </Text>
      </View>
      <ScrollView>
        <View style={styles.desccontainer}>
          <Text style={styles.descheader}>Time & Date</Text>
          <Text style={styles.desctext}>🕙 Time: 17.00-22.00</Text>
          <Text style={styles.desctext}>📅 Date: 20 August 2024</Text>
        </View>
        <View style={styles.desccontainer}>
          <Text style={styles.descheader}>Location</Text>
          <Text style={styles.desctext}>Location: Lapangan Tennis UPN</Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.desctext,
                { color: "#47663b", textDecorationLine: "underline" },
              ]}
            >
              Open in Google: {"Lapangan Tennis UPN"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.desccontainer}>
          <Text style={styles.descheader}>Facilities</Text>
          <View style={styles.pillcontainer}>
            <Text style={[styles.desctext, styles.facilitiespill]}>
              Ballboy
            </Text>
            <Text style={[styles.desctext, styles.facilitiespill]}>
              Coaches
            </Text>
            <Text style={[styles.desctext, styles.facilitiespill]}>Court</Text>
            <Text style={[styles.desctext, styles.facilitiespill]}>Balls</Text>
            <Text style={[styles.desctext, styles.facilitiespill]}>
              Rackets
            </Text>
          </View>
        </View>
        <View style={styles.desccontainer}>
          <Text style={styles.descheader}>Participants</Text>
          <View style={styles.pillcontainer}>
            <Tooltip
              anchor={renderAnchor}
              visible={visible}
              onBackdropPress={() => setVisible(false)} // Ensure tooltip hides on outside touch
              style={styles.tooltip}
            >
              <Text>Username</Text>
            </Tooltip>
          </View>
          <Text style={[styles.desctext, { marginTop: 10 }]}>
            Slots available: 5
          </Text>
        </View>
        <View style={styles.desccontainer}>
          <Text style={styles.descheader}>Book Slot</Text>
          <Text style={styles.desctext}>Number of People:</Text>
          <Select
            selectedIndex={numPeopleIndex}
            value={options[numPeopleIndex.row]}
            onSelect={(index) => {
              setNumPeopleIndex(index);
            }}
          >
            {options.map((item, i) => (
              <SelectItem key={i} title={item} />
            ))}
          </Select>
          <Text>{numPeople}</Text>
          <Text style={[styles.descheader, { marginTop: 10 }]}>
            Total Price: 1500000
          </Text>
          <Button
            style={{
              marginVertical: 20,
              backgroundColor: "#47663b",
              borderColor: "white",
            }}
            onPress={() => {
              console.log("HAI");
            }}
          >
            Confirm
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E8ECD7",
  },
  titlecontainer: {
    padding: 20,
    backgroundColor: "#47663b",
  },
  desccontainer: {
    padding: 20,
  },
  desctext: {
    fontSize: 20,
    marginBottom: 5,
  },
  descheader: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    color: "#1f4529",
  },
  pillcontainer: {
    flexDirection: "row", // Ensures horizontal alignment
    flexWrap: "wrap", // Allows wrapping to the next line if the text overflows
    gap: 8, // Adds spacing between pills
  },
  facilitiespill: {
    paddingHorizontal: 15, // Add horizontal padding for the pill shape
    paddingVertical: 8, // Add vertical padding
    borderRadius: 20, // Make the border fully rounded
    borderColor: "#47663b",
    backgroundColor: "#47663b", // Background color for the pill
    color: "#e8ecd7", // Text color
    fontSize: 12, // Adjust font size
    borderWidth: 1, // Optional: Add a border
    borderColor: "#a3d2b3", // Optional: Border color
    textAlign: "center", // Center-align the text
    alignSelf: "flex-start",
  },
});
export default BookDetail;
