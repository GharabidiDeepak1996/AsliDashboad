import React from "react";
import { View, Text } from "react-native";

const CategoriesAllItem = ({ categoriesIcon, categoriesItem }) => {
  return (
    <View style={{ width: 120, marginRight: 12, marginBottom: 12 }}>
      <View
        style={{
          borderRadius: 6,
          backgroundColor: "white",
          width: 120,
          height: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categoriesIcon}
      </View>
      <Text
        style={{
          fontWeight: "bold",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        {categoriesItem}
      </Text>
    </View>
  );
};

export default CategoriesAllItem;
