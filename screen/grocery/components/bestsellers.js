import react from "react";
import { View, Text, Image } from "react-native";
import Styles from "../grocerystyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPercent, faStar } from "@fortawesome/free-regular-svg-icons";
const BestSellers = () => {
  return (
    <View style={Styles.bestsellerContainer}>
      <View style={Styles.categoriesView}>
        <Text style={Styles.categoriesTitle}>Best Sellers</Text>
        <Text style={Styles.categoriesViewMore}>See All</Text>
      </View>
      <View style={Styles.bestsellerCardContainer}>
        <View style={Styles.bestSellerCardView}>
          <View style={Styles.bestsellerImageContainer}>
            <Image
              resizeMode="cover"
              style={Styles.bestsellerImage}
              source={require("../../../assets/bestseller/bestseller1.png")}
            />
          </View>
          <View style={Styles.bestsellerPercentageContainer}>
            <FontAwesomeIcon
              icon={faPercent}
              style={Styles.bestsellerPercentage}
              size={12}
            />
            <Text style={Styles.bestsellerText}>Promotion</Text>
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

export default BestSellers;
