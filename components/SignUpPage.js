import { CometChat } from "@cometchat-pro/react-native-chat";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const SignUpPage = () => {
  const navigation = useNavigation();
  const authKey = "ce056fa003ea0a9883c43532345d865846c75fbf";
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const generateRandomUID = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uid = "";
    for (let i = 0; i < 16; i++) {
      uid += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return uid;
  };

  const handleSignup = () => {
    console.log("UserName: ", userName);
    const uid = generateRandomUID();
    const user = new CometChat.User(uid);
    //user.setAvatar("");
    user.setName("test");

    CometChat.createUser(user, authKey).then(
      (user) => {
        console.log("User created successfully:", user);
        navigation.navigate("HomeScreen");
      },
      (error) => {
        console.error("User creation failed with error:", error);
      }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
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
      <Button style={styles.button} title="Sign Up" onPress={handleSignup} />
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

export default SignUpPage;
