import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Styles from "../grocery/grocerystyle";
import { LocationAndCart, SearchView } from "../grocery/components";
import GeneralStatusBarColor from "../generalstatusbar";
import CustomButton from "../../SharedComponents/customButton";
import * as Location from "expo-location";

const HomeScreen = () => {
  const DATA = [
    {
      description:
        "Start Your Day With Delicious Food Lightening Fast Delivery",
      title: "Food",
      icons: require("../../assets/food.png"),
    },
    {
      description: "Order groceries and daily household essentials online.",
      title: "Grocery",
      icons: require("../../assets/grocery.png"),
    },
    {
      description:
        "Use this app to get things delivered from anywhere in your city.",
      title: "Courier",
      icons: require("../../assets/courier.png"),
    },
  ];

  const Item = ({ title, description, icons }) => (
    <View style={{ marginHorizontal: 10, marginVertical: 3 }}>
      <View style={styles.item}>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.descStyle}>{description}</Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                console.log("pressed");
              }}
            >
              <Text style={styles.buttonTextStyle}>Order Now</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
              source={icons}
            />
          </View>
        </View>
      </View>
    </View>
  );

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      if (permission === true) {
        console.log("alowed");
      } else {
      }
    }
    return true;
  };
  const askPermission = async () => {
    const permission = await Location.getForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        checkPermission();
        console.log("Screen was focused");
      }
      fetchData();

      return () => {
        console.log("Screen was unfocused");
        // Useful for cleanup functions
      };
    }, [])
  );
  return (
    <SafeAreaView style={Styles.container}>
      <GeneralStatusBarColor />

      <LocationAndCart />
      <SearchView />

      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              description={item.description}
              icons={item.icons}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 5,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  descStyle: {
    fontSize: 14,
    fontWeight: "300",
  },
  buttonStyle: {
    backgroundColor: "#D03B30",
    color: "white",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
    width: "45%",
    paddingVertical: 0,
  },
  buttonTextStyle: {
    color: "white",
    paddingVertical: 7,
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default HomeScreen;
