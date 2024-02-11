import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Review from "../components/Review";
import { ReviewFormular } from "../components/ReviewFormular";

const Feedback = () => {
  const [reviews, setReviews] = useState([
    {
      nick: "nick",
      text: "review_placeholder",
      title: "Title",
      rating: 3,
      id: 1,
    },
  ]);

  const submitHandler = (nick, text, title, rating) => {
    let errorMessage = "";
    console.log(`Nick length at submission: ${nick.length}`);
    console.log(`Text length at submission: ${text.length}`);
    console.log(`Title length at submission: ${title.length}`);

    if (nick.length < 2) {
      errorMessage += "Nick must be at least 2 characters long.\n";
    }
    if (title.length < 3) {
      errorMessage += "Title must be at least 3 characters long.\n";
    }
    if (text.length < 15) {
      errorMessage += "Review text must be at least 15 characters long.\n";
    }

    if (errorMessage) {
      Alert.alert("Error", errorMessage);
    } else {
      setReviews((prevReviews) => [
        { nick, text, title, rating, id: Math.random().toString() },
        ...prevReviews,
      ]);
    }
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
        {/* <ReviewFormular submitHandler={submitHandler} /> */}
        <View style={s.list}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={reviews}
            // stickyHeaderHiddenOnScroll
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
              <ReviewFormular submitHandler={submitHandler} />
            }
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
