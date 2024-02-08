import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";

import UserProfile from "./UserProfile";

const Review = ({ item }) => {
  const { text, id, nick, title, rating } = item;

  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        backgroundColor: "#999",
        padding: 20,
        gap: 20,
        borderRadius: 50,
        marginTop: 20,
        width: width - 60,
      }}
    >
      <UserProfile nick={nick} />

      <View style={{ position: "absolute", left: 180, top: 10 }}>
        <AirbnbRating
          readonly
          // startingValue={rating}
          size={25}
          reviewSize={25}
          showRating={false}
          starContainerStyle={{ padding: 5 }}
        />
      </View>

      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
