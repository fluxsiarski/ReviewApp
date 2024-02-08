import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import AddReview from "../components/AddReview";
import Review from "../components/Review";
import { ReviewFormular } from "../components/ReviewFormular";

const Feedback = () => {
  const [reviews, setReviews] = useState([
    {
      nick: "Joe",
      text: "Amazing app",
      title: "Title",
      rating: 3,
      id: 1,
    },
  ]);

  const submitHandler = (nick, title, text, rating) => {
    setReviews((prevReviews) => {
      return [
        {
          nick: nick,
          title: title,
          text: text,
          rating: rating,
          id: Math.random().toString(),
        },
        ...prevReviews,
      ];
    });
  };

  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
        flex: 1,
        // backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 17 }}>
        If you enjoyed using our app, pleas leave a feedback
      </Text>

      <View style={s.content}>
        <ReviewFormular submitHandler={submitHandler} />
        <View style={s.list}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={reviews}
            renderItem={({ item }) => {
              return <Review item={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Feedback;

const s = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
  },

  list: { flex: 1, gap: 20 },
});