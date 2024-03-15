import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Review from "../components/Review";
import { ReviewFormular } from "../components/ReviewFormular";
import Feedback from "./Feedback";
import { Settings } from "./Settings";
import Other from "./Other";

const Tab = createBottomTabNavigator();

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
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Other") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Settings"
          component={Settings}
          // options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Other"
          component={Other}
          // options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

const s = StyleSheet.create({});
