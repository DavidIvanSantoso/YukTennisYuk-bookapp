import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainSplash from "./app/screens/MainSplash";
import RegisterScreen from "./app/screens/RegisterScreen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/HomeScreen";
import FooterComp from "./app/components/FooterComp";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainSplash">
          <Stack.Screen name="MainSplash" component={MainSplash} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="HomeScreen"
            component={FooterComp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
