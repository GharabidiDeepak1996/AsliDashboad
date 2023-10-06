import React from "react";
import { SafeAreaView, Image, Text, View, ScrollView } from "react-native";

import GeneralStatusBarColor from "../generalstatusbar";
import Styles from "./grocerystyle";
import {
  LocationAndCart,
  SearchView,
  Categories,
  BestSellers,
  NearByStore,
} from "./components";

const GroceryScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <GeneralStatusBarColor />

      <LocationAndCart />
      <SearchView />

      <View style={Styles.imageViewContainer}>
        <Image
          resizeMode="contain"
          style={Styles.imageContainer}
          source={require("../../assets/bannerpesanpesan.jpg")}
        />
      </View>

      <ScrollView>
        <Categories />
        <BestSellers />
        <NearByStore />

        <Image
          resizeMode="stretch"
          style={{ width: "100%", height: 140 }}
          source={require("../../assets/bottombannerkmpmunggiyango.jpg")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroceryScreen;
