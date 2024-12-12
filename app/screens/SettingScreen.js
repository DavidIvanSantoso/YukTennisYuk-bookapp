import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Text } from "@ui-kitten/components";
import Collapsible from "react-native-collapsible";

function SettingScreen(props) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <View style={styles.background}>
      <View style={styles.profilecontainer}>
        <Avatar
          source={require("../assets/favicon.png")}
          style={styles.avatar}
          size="giant"
        />
        <Text style={styles.settingstext}>Nama Account</Text>
        <Text style={styles.settingstext}>No Telpon</Text>

        <Button
          style={[
            styles.button,
            { backgroundColor: "#b23b3b", borderColor: "#b23b3b" },
          ]}
        >
          Logout
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e8ecd7",
  },
  profilecontainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  settingstext: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 5,
    color: "#1f4529",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#1f4529",
    borderColor: "#1f4529",
  },
});
export default SettingScreen;
