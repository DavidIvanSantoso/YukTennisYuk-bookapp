import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Text,
  Modal,
  Card,
  Input,
  Divider,
} from "@ui-kitten/components";
import Collapsible from "react-native-collapsible";

function SettingScreen(props) {
  //modal account info
  const [visibleModalAccount, setVisibleModalAccount] = useState(false);
  //modal Terms & Condition info
  const [visibleTermsCondition, setVisibleTermsCondition] = useState(false);

  //Update Info
  const [name, setName] = useState("1");
  const [phone, setPhone] = useState("1");
  const [password, setPassword] = useState("1");

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
        <View>
          <Button
            style={[styles.button]}
            onPress={() => setVisibleModalAccount(true)}
          >
            Change Account Information
          </Button>
          <Button style={[styles.button]}>Terms & Condition</Button>
          <Button
            style={[
              styles.button,
              { backgroundColor: "#b23b3b", borderColor: "#b23b3b" },
            ]}
          >
            Logout
          </Button>
        </View>
        {/* MODAL CHANGE ACCOUNT INFO */}
        <View style={styles.modal}>
          <Modal
            visible={visibleModalAccount}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisibleModalAccount(false)}
          >
            <Card disabled={true}>
              <Text style={styles.modalheadertext}>
                Change Account Information
              </Text>
              <Divider style={styles.divider}></Divider>
              <View style={styles.inputcontainer}>
                <Text style={styles.inputlabel}>Change Username</Text>
                <Input
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  style={{ marginBottom: 10 }}
                />
                <Text style={styles.inputlabel}>Change Password</Text>
                <Input
                  style={{ marginBottom: 5 }}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <Button onPress={() => setVisibleModalAccount(false)}>
                Confirm Changes
              </Button>
            </Card>
          </Modal>
        </View>
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
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalheadertext: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f4529",
    textAlign: "center",
  },
  divider: {
    height: 2,
    backgroundColor: "black",
    marginBottom: 10,
  },
  inputcontainer: {
    padding: 10,
    marginBottom: 10,
  },
  inputlabel: {
    fontSize: 16,
    color: "#1f4529",
    fontWeight: "bold",
  },
});
export default SettingScreen;
