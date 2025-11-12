import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import {
  ApplicationProvider,
  Layout,
  Input,
  Button,
  Text,
} from "@ui-kitten/components";
import Svg, { Path } from "react-native-svg";

// ✅ untuk pengguna Expo
// import LinearGradient from "react-native-linear-gradient";

import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";

function MainSplash({ navigation }) {
  const [name, setName] = useState("1");

  const [password, setPassword] = useState("1");
  const handleLogin = () => {
    // Basic validation
    if (!name || !password) {
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

      setPassword("");
      navigation.navigate("HomeScreen");
    }
  };
  const handlePress = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.background}>
      <Layout style={styles.layoutContainer}>
        <LinearGradient colors={["#47663B", "#85A947"]} style={{ flex: 1 }}>
          {/* Isi konten di sini */}
          <View style={{ flex: 1 }}>
            <Image
              source={require("../assets/tennislogo1.png")}
              style={{ alignSelf: "center", width: 250, height: 300 }}
            ></Image>

            <Text
              category="h3"
              style={{
                textAlign: "center",
                marginBottom: 20,
                color: "#e8ecd7",
              }}
            >
              YUK TENNIS YUK!
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Text category="h5" style={styles.title}>
              Welcome Back!
            </Text>

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
              label={"Password"}
              captionStyle={{ color: "black" }}
              labelStyle={{ color: "black" }}
              caption={"Enter your password"}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Button style={styles.button} onPress={handleLogin}>
              Login
            </Button>
            <View
              style={[
                styles.registerlinkview,
                {
                  flexDirection: "row",

                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ color: "#123524" }}>Don't have an account? </Text>
              <TouchableOpacity onPress={handlePress}>
                <Text style={{ color: "#85A947" }}>Register Here!</Text>
              </TouchableOpacity>
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
    flexDirection: "column",
    backgroundColor: "#47663B",
  },
  registerlinkview: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  layoutContainer: {
    flex: 1,
    marginTop: 24,
    alignContent: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
  },
  title: {
    textAlign: "left",
    marginBottom: 20,
    color: "#123524",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#123524",
    color: "black",
    borderColor: "#123524",
  },
});
export default MainSplash;
