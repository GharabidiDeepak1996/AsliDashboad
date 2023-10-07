import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import SearchView from "../groceries/components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  faBorderAll,
  faBars,
  faWheatAwn,
  faCarrot,
  faAppleWhole,
  faCow,
  faBaby,
  faCookieBite,
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const AllCategoriesScreen = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigation = useNavigation();

  useState(() => {
    let items = [
      { id: 1, src: faWheatAwn, text: "Groceries" },
      { id: 2, src: faCarrot, text: "Vegetables" },
      { id: 3, src: faAppleWhole, text: "Fruits" },
      { id: 4, src: faCow, text: "Milk" },
      { id: 5, src: faBaby, text: "Baby Care" },
      { id: 6, src: faCookieBite, text: "Biscuits & Snacks" },
      { id: 7, src: faMartiniGlassCitrus, text: "Soft Drinks" },
      { id: 8, src: faWheatAwn, text: "Noodles" },
    ];
    setDataSource(items);
  }, []);
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

      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1,
              alignItems: "center",
            }}
            onStartShouldSetResponder={() => {
              navigation.navigate("Groceries");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 80,
                height: 80,
                borderRadius: 14,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={item.src}
                size={40}
                style={{
                  color: "#c23d32",
                }}
              />
            </View>

            <Text>{item.text}</Text>
          </View>
        )}
        numColumns={4}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default AllCategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
