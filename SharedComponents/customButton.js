import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function CustomButton({ activeOpacity, onPress, buttonName }) {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle}>{buttonName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#D03B30",
    color: "white",
    alignItems: "center",
    borderRadius: 10,
    //marginTop:16,
    marginVertical: 16,
    width: "100%",
    paddingVertical: 4,
  },
  buttonTextStyle: {
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
