import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const FoodScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>FoodScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default FoodScreen;
