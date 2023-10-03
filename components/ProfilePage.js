import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://placekitten.com/150/150" }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Freshman</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProfilePage;
