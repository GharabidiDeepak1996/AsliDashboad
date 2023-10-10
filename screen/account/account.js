import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faWallet,
  faUser,
  faChevronRight,
  faInfo,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faMap } from "@fortawesome/free-regular-svg-icons";
import { CustomButton } from "../../SharedComponents/customButton";
const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ImageView */}
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          borderRadius: 16,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View style={styles.imageView}>
          <Image
            source={require("../../assets/60111.jpg")}
            style={{ width: "100%", height: "100%", borderRadius: 68 }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            marginLeft: 18,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Julia Anggraini
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            julia.anggraini@gmaul.com
          </Text>
        </View>
      </View>
      {/* WalletView */}
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          borderRadius: 16,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 0.3 }}>
          <FontAwesomeIcon icon={faWallet} size={32} style={{ color: "red" }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "500", fontSize: 18 }}>
            Wallet Balance
          </Text>
          <Text style={{ color: "gray" }}>Click for more details</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Rp.</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>0</Text>
        </View>
      </View>
      {/* List */}
      <View
        style={{
          backgroundColor: "white",

          borderRadius: 16,
          paddingHorizontal: 16,
          marginBottom: 16,
        }}
      >
        {/* Profile */}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={{ flex: 0.3 }}>
            <FontAwesomeIcon icon={faUser} size={24} style={{ color: "red" }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Profile</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size={18}
              style={{ color: "black" }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            width: "100%",
            height: "1%",
            marginTop: 16,
          }}
        />
        {/* My Address */}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={{ flex: 0.3 }}>
            <FontAwesomeIcon icon={faMap} size={24} style={{ color: "red" }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>My Address</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size={18}
              style={{ color: "black" }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            width: "100%",
            height: "1%",
            marginTop: 16,
          }}
        />
        {/*Order List */}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={{ flex: 0.3 }}>
            <FontAwesomeIcon
              icon={faCartShopping}
              size={24}
              style={{ color: "red" }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Order List</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size={18}
              style={{ color: "black" }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            width: "100%",
            height: "1%",
            marginTop: 16,
          }}
        />
        {/*Help Center */}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={{ flex: 0.3 }}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size={24}
              style={{ color: "red" }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Help Center</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size={18}
              style={{ color: "black" }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            width: "100%",
            height: "1%",
            marginTop: 16,
          }}
        />
        {/*About Us*/}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <View style={{ flex: 0.3 }}>
            <FontAwesomeIcon icon={faInfo} size={24} style={{ color: "red" }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>About Us</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size={18}
              style={{ color: "black" }}
            />
          </View>
        </View>
      </View>
      <CustomButton activeOpacity={0.5} buttonName="LOGOUT" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 22,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  imageView: {
    width: 130,
    height: 130,
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 68,
    justifyContent: "center",
  },
});

export default AccountScreen;
