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
import Icon from "react-native-vector-icons/Ionicons";

import { useState } from "react";
import Colors from "../components/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

function RegisterScreen({ navigation }) {
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
    <SafeAreaView style={styles.background}>
      <Layout style={styles.layoutContainer}>
        <LinearGradient colors={["#47663B", "#85A947"]} style={{ flex: 1 }}>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 64,
              flexGrow: 1,
            }}
          >
            <View classname="container-header">
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginLeft: 20, marginRight: 24 }}
                >
                  <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <Text
                  category="h4"
                  style={{
                    fontweight: "bold",
                    color: Colors.darkgreen,
                    marginBottom: 8,
                    textAlign: "center",
                  }}
                >
                  Create an account!
                </Text>
              </View>
              <Text
                category="h7"
                style={{
                  fontweight: "bold",
                  color: Colors.darkgreen,

                  textAlign: "center",
                }}
              >
                Let's be part of our tennis community!
              </Text>
            </View>
            <View classname="container-form" style={{ marginTop: 48 }}>
              <Input
                style={styles.input}
                placeholder="Username"
                value={name}
                captionStyle={{ color: "black" }}
                labelStyle={{ color: "black" }}
                label={"Username"}
                keyboardType="default"
                caption={"Enter your username"}
                onChangeText={setName}
              />

              <Input
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                captionStyle={{ color: "black" }}
                labelStyle={{ color: "black" }}
                label={"Number"}
                keyboardType="number-pad"
                caption={"Enter your phone number"}
                onChangeText={setPhone}
              />

              <Input
                style={styles.input}
                placeholder="Password"
                value={password}
                captionStyle={{ color: "black" }}
                labelStyle={{ color: "black" }}
                label={"Password"}
                keyboardType="default"
                caption={"Enter your password"}
                onChangeText={setPassword}
              />
              <Input
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmpassword}
                captionStyle={{ color: "black" }}
                labelStyle={{ color: "black" }}
                label={"Confirm Password"}
                keyboardType="default"
                caption={"Enter your confirmation password"}
                onChangeText={setConfirmPassword}
              />
              <Button style={styles.button} onPress={handleRegister}>
                Confirm
              </Button>
            </View>
          </View>
        </LinearGradient>
      </Layout>
    </SafeAreaView>
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
    flexGrow: 1,
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
    backgroundColor: Colors.darkgreen,
    borderColor: Colors.darkgreen,
  },
});
export default RegisterScreen;
