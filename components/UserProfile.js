import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserImage from "./UserImage";

const UserProfile = ({ nick }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <UserImage />
      <Text>{nick}</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
