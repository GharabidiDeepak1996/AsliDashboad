import React from "react";
import { Text, View, Image } from "react-native";
import Styles from "../grocerystyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPercent, faStar } from "@fortawesome/free-regular-svg-icons";
const NearByStore = () => {
  return (
    <View
      style={{
        paddingHorizontal: 22,
        paddingTop: 8,
        backgroundColor: "#f2f2f2",
      }}
    >
      <View style={Styles.categoriesView}>
        <Text style={Styles.categoriesTitle}>Near By Stores</Text>
        <Text style={Styles.categoriesViewMore}>See All</Text>
      </View>
      <View style={Styles.bestsellerCardContainer}>
        <View style={Styles.bestSellerCardView}>
          <View style={Styles.bestsellerImageContainer}>
            <Image
              resizeMode="cover"
              style={Styles.bestsellerImage}
              source={require("../../../assets/bestseller/bestseller2.jpg")}
            />
          </View>

          <View style={{ paddingHorizontal: 8 }}>
            <Text>Puspita Maji Rejeki</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={Styles.bestsellerStarContainer}>
                <FontAwesomeIcon
                  icon={faStar}
                  size={10}
                  style={{ color: "white" }}
                />
              </View>
              <Text style={{ marginLeft: 2 }}>4.3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NearByStore;
