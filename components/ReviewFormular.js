import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { Rating, AirbnbRating } from "react-native-ratings";

export const ReviewFormular = ({ submitHandler }) => {
  const [nick, setUserNick] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const changeUserHandler = (val) => {
    setUserNick(val);
  };

  const changeReviewHandler = (val) => {
    setText(val);
  };

  const changeReviewTitleHandler = (val) => {
    setTitle(val);
  };

  return (
    <View
      style={{
        backgroundColor: "lightgrey",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <View style={s.top}>
        <TextInput
          multiline
          onChangeText={changeUserHandler}
          placeholder="Type your nick"
          style={s.userNick}
          tex
        />

        <AirbnbRating
          onFinishRating={(rate) => setRating(rate)}
          size={25}
          reviewSize={25}
          showRating={false}
          starContainerStyle={{ padding: 5 }}
        />
      </View>

      <View style={s.middle}>
        <TextInput
          multiline
          onChangeText={changeReviewTitleHandler}
          placeholder="Type review title..."
          style={s.reviewTitle}
        />
      </View>

      <View style={s.bottom}>
        <TextInput
          multiline
          onChangeText={changeReviewHandler}
          placeholder="Your review here..."
          style={s.reviewText}
        />
      </View>
      <Button
        title="add review"
        color={"red"}
        onPress={() => {
          console.log("Nick:", nick);
          console.log("Title:", title);
          console.log("Text:", text);
          submitHandler(nick, text, title, rating);
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userNick: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 14,
  },

  reviewTitle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 18,
  },

  middle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  bottom: { marginTop: 25 },

  reviewText: {
    fontSize: 15,
    fontFamily: "nunito-regular",
  },
});
