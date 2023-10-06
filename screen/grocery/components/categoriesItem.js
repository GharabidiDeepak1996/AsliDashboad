import React from "react";
import { View, Text } from "react-native";
import Styles from "../grocerystyle";

const CategoriesItem = ({ categoriesIcon, categoriesItem }) => {
  return (
    <View style={Styles.categoriesCards}>
      {categoriesIcon}
      <Text style={{ marginTop: 8 }}>{categoriesItem}</Text>
    </View>
  );
};

export default CategoriesItem;
