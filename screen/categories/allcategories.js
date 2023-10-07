import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import SearchView from "../groceries/components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBucket,
  faBorderAll,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CategoriesAllItem from "./components/categoriesAllItems";

const AllCategoriesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 12,
        }}
      >
        <SearchView />
        <FontAwesomeIcon
          icon={faBorderAll}
          size={20}
          style={{ color: "black", marginHorizontal: 12 }}
        />
        <FontAwesomeIcon
          icon={faBars}
          size={20}
          style={{ color: "black", marginHorizontal: 12 }}
        />
      </View>
      {/* CardForCategories */}

      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
        <CategoriesAllItem
          categoriesItem="Groceries"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Vegetables"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Fruits"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Milk"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Baby Care"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Biscuits & Snacks"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Soft Drinks"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
        <CategoriesAllItem
          categoriesItem="Noodles"
          categoriesIcon={
            <FontAwesomeIcon
              icon={faBucket}
              size={55}
              style={{ color: "red" }}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default AllCategoriesScreen;
