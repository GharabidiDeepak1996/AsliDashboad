import React from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faWheatAwn,
  faCarrot,
  faAppleWhole,
  faCow,
  faBaby,
  faCookieBite,
  faMartiniGlassCitrus,
} from "@fortawesome/free-regular-svg-icons";
import { Icon } from "@iconify/react";
import CategoriesItem from "./categoriesItem";
import Styles from "../grocerystyle";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: 16, backgroundColor: "#f2f2f2" }}>
      <View style={Styles.categoriesView}>
        <Text style={Styles.categoriesTitle}>Categories</Text>
        <Text
          style={Styles.categoriesViewMore}
          onPress={() => {
            navigation.navigate("AllCategories");
          }}
        >
          View More
        </Text>
      </View>
      <View style={Styles.categoriesCardsView}>
        {/* Groceries */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faWheatAwn}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Groceries"
        />

        {/* Vegetables */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faCarrot}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Vegetables"
        />

        {/* Fruits */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faAppleWhole}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Fruits"
        />
        {/* Milk */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faCow}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Milk"
        />
        {/* Baby Care */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faBaby}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Baby Care"
        />
        {/* Snacks */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faCookieBite}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Snacks"
        />
        {/* Soft Drinks */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faMartiniGlassCitrus}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Soft Drinks"
        />
        {/* Noodles */}
        <CategoriesItem
          categoriesIcon=<FontAwesomeIcon
            icon={faWheatAwn}
            size={20}
            style={{ color: "#c23d32" }}
          />
          categoriesItem="Noodles"
        />
      </View>
    </View>
  );
};
export default Categories;
