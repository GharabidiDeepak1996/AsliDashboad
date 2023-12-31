import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const CourierScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CourierScreen</Text>
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

export default CourierScreen;
