import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainSplash from "./app/screens/MainSplash";
import RegisterScreen from "./app/screens/RegisterScreen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/HomeScreen";
import FooterComp from "./app/components/FooterComp";
import BookDetail from "./app/screens/BookDetail";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainSplash">
            <Stack.Screen
              name="MainSplash"
              component={MainSplash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={FooterComp}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ConfirmBooking" component={BookDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
