import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Review from "../components/Review";
import { ReviewFormular } from "../components/ReviewFormular";

export const Home = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Feedback")}
          title="Feedback"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* <Review item={{ text: "lol", id: "20" }} /> */}
    </View>
  );
};

const s = StyleSheet.create({});
