import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CometChat } from "@cometchat-pro/react-native-chat";

import ProfilePage from "./components/ProfilePage";
import LoginScreen from "./components/LoginScreen";
import SignUpPage from "./components/SignUpPage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}

function ProfileScreen() {
  return <ProfilePage />;
}

export default function App() {
  useEffect(() => {
    const appID = "24572954d2e7247f";
    const region = "US";

    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .autoEstablishSocketConnection(true)
      .build();

    CometChat.init(appID, appSetting).then(
      () => {
        console.log("Initialization completed successfully");
      },
      (error) => {
        console.log("Initialization failed with error: ", error);
      }
    );
  }, []);
  const userLoggedIn = false;

  return (
    <NavigationContainer>
      {userLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>

    /*<View style={styles.container} behavior="padding">
      <Text>Hi Hello</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
