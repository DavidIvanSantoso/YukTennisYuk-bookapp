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
    <SafeAreaView style={styles.background}>
      <View style={{ margin: 0, padding: 0 }}>
        <Svg
          height="100"
          width="100%"
          viewBox="0 0 1440 320"
          // style={styles.svg}
        >
          <Path
            fill="#1f4529"
            fillOpacity="1"
            d="M0,224L20,208C40,192,80,160,120,160C160,160,200,192,240,186.7C280,181,320,139,360,149.3C400,160,440,224,480,213.3C520,203,560,117,600,90.7C640,64,680,96,720,96C760,96,800,64,840,80C880,96,920,160,960,181.3C1000,203,1040,181,1080,165.3C1120,149,1160,139,1200,165.3C1240,192,1280,256,1320,261.3C1360,267,1400,213,1420,186.7L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          />
        </Svg>
      </View>
      <Layout style={styles.layoutContainer}>
        <Image
          source={require("../assets/tennislogo.png")}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        ></Image>
        <Text
          category="h3"
          style={{ textAlign: "center", marginBottom: 20, color: "#e8ecd7" }}
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
          keyboardType="text"
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
          <Text style={{ color: "#eed3b1" }}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={handlePress}>
              <Text
                style={{
                  color: "black",
                  textDecorationLine: "underline",
                  lineHeight: 24,
                }}
              >
                Register Here!
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </Layout>
      <View style={{ flex: 0 }}>
        <Svg height="100" width="100%" viewBox="0 0 1440 320">
          <Path
            fill="#1f4529"
            fillOpacity="1"
            d="M0,64L20,90.7C40,117,80,171,120,181.3C160,192,200,160,240,149.3C280,139,320,149,360,128C400,107,440,53,480,80C520,107,560,213,600,240C640,267,680,213,720,197.3C760,181,800,203,840,176C880,149,920,75,960,42.7C1000,11,1040,21,1080,37.3C1120,53,1160,75,1200,106.7C1240,139,1280,181,1320,181.3C1360,181,1400,139,1420,117.3L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          />
        </Svg>
      </View>
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
    margin: 10,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0)", // Optional: to make the form stand out with a semi-transparent background
  },
  title: {
    textAlign: "left",
    marginBottom: 20,
    color: "#eed3b1",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#eed3b1",
    color: "black",
  },
  // svg: {
  //   position: "absolute", // Position the SVG at the top
  //   top: -5,
  //   left: 0,
  //   right: 0,
  //   // Place SVG behind other content
  // },
});
export default MainSplash;
