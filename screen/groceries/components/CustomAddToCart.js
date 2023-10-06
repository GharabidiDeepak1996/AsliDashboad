import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const CustomAddToCart = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 60,
        marginRight: 8,
      }}
    >
      <View>
        <TouchableOpacity>
          <FontAwesomeIcon size={18} icon={faHeart} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <FontAwesomeIcon size={18} icon={faCartShopping} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
