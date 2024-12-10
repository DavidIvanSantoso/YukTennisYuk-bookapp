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

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const handleRegister = () => {
    // Basic validation
    if (!name || !phone || !password || !confirmpassword) {
      Alert.alert("Error", "All fields are required!");
    } else if (password !== confirmpassword) {
      Alert.alert("Error", "Check your password again!");
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
      setConfirmPassword("");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/wallpaper.jpg")}
      style={styles.background}
    >
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
          Register
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
        <Input
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmpassword}
          onChangeText={setConfirmPassword}
        />

        <Button style={styles.button} onPress={handleRegister}>
          Confirm
        </Button>
      </Layout>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },

  layoutContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Optional: to make the form stand out with a semi-transparent background
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
export default RegisterScreen;
