import { StyleSheet, View, SafeAreaView, Text, StatusBar } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faLocationPin,
  faCartShopping,
} from "@fortawesome/free-regular-svg-icons";
import Styles from "../grocerystyle";

const LocationAndCart = () => {
  return (
    <View style={Styles.locationView}>
      <View style={{ flexDirection: "row" }}>
        <FontAwesomeIcon
          icon={faLocationPin}
          size={26}
          style={{
            alignSelf: "center",
          }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text>Jakarta</Text>
          <Text>Jl Teluk Gong 1, Dki Jakarta</Text>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <FontAwesomeIcon
          icon={faCartShopping}
          size={30}
          style={{
            alignSelf: "center",
          }}
        />
        <Text style={Styles.cartCount}>12</Text>
      </View>
    </View>
  );
};
export default LocationAndCart;
