import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  ApplicationProvider,
  Layout,
  Input,
  Button,
  Text,
} from "@ui-kitten/components";
import { useState } from "react";
function MainSplash({ navigation }) {
  const [name, setName] = useState("1");
  const [phone, setPhone] = useState("1");
  const [password, setPassword] = useState("1");
  const handleLogin = () => {
    // Basic validation
    if (!name || !phone || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    } else {
      // Simulate successful registration
      Alert.alert(
        "Success",
        `Welcome, ${name}! Your account has been created.`
      );
      // Reset fields (optional)
      setName("");
      setPhone("");
      setPassword("");
      navigation.navigate("HomeScreen");
    }
  };
  const handlePress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.background}>
      <Layout style={styles.layoutContainer}>
        <Image
          source={require("../assets/tennislogo.png")}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        ></Image>
        <Text
          category="h3"
          style={{ textAlign: "center", marginBottom: 20, color: "black" }}
        >
          YUK TENNIS YUK!
        </Text>
        <Text category="h5" style={styles.title}>
          Login
        </Text>

        <Input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <Input
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button style={styles.button} onPress={handleLogin}>
          Login
        </Button>
        <View style={styles.registerlinkview}>
          <Text style={{ color: "black" }}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={handlePress}>
              <Text style={{ color: "blue" }}>Register Here!</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </Layout>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#47663B",
  },
  registerlinkview: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  layoutContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0)", // Optional: to make the form stand out with a semi-transparent background
    borderRadius: 10, // Optional: add some border radius for aesthetics
  },
  title: {
    textAlign: "left",
    marginBottom: 20,
    color: "black",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});
export default MainSplash;
