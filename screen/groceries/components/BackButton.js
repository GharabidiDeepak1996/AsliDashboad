import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-regular-svg-icons";
export const BackButton = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          console.log("goBack");
        }}
      >
        <FontAwesomeIcon
          size={22}
          icon={faArrowLeft}
          style={{ marginRight: 16 }}
        />
      </TouchableOpacity>
    </View>
  );
};
