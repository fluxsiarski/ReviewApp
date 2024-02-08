import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddReview = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        placeholder="Write you opinion here..."
        multiline
      />

      <Button
        title="add review"
        color={"coral"}
        onPress={() => submitHandler(text)}
      />
    </View>
  );
};

export default AddReview;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
  },
});
