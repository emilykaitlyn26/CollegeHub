import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CometChat } from "@cometchat-pro/react-native-chat";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    CometChat.login(email, password).then(
      (user) => {
        console.log("Login successful:", user);
        navigation.navigate("HomeScreen");
      },
      (error) => {
        console.log("Login failed with error:", error);
      }
    );
  };

  const navigateSignup = () => {
    console.log("Navigated to signup page");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button style={styles.button} title="Login" onPress={handleLogin} />
      <Button style={styles.button} title="Signup" onPress={navigateSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
});

export default LoginScreen;
