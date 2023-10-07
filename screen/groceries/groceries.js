import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, FlatList } from "react-native";
import { CustomAddToCart } from "./components/CustomAddToCart";
import { BackButton } from "./components/BackButton";
import SearchView from "./components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faBorderAll, faBars } from "@fortawesome/free-solid-svg-icons";

const Groceries = ({ navigation }) => {
  const [dataSource, setDataSource] = useState([]);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <BackButton />,
  //     //headerRight: () => <CustomAddToCart navigationProps={navigation} />,
  //   });
  // }, [navigation]);

  useState(() => {
    let items = [
      {
        id: 1,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
      },
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
      {/* ListCards */}

      <View
        style={{
          width: 165,
          height: 200,
          backgroundColor: "white",
          borderRadius: 12,
          alignItems: "center",
          padding: 6,
          marginTop: 12,
        }}
      >
        {/* Image */}
        <View
          style={{
            width: "70%",
            backgroundColor: "white",
            height: "60%",
          }}
        >
          <Image //contain
            resizeMode="stretch"
            style={{
              height: "100%",
              width: "100%",
              alignSelf: "center",
            }}
            source={require("../../")}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 11, marginVertical: 6 }}>
          Kellogg's crunchy Granola Almonds & Creanberries 45kg
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>Rp. 50,000</Text>
          <View
            style={{
              backgroundColor: "green",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 12,
                marginRight: 2,
              }}
            >
              Add
            </Text>
            <FontAwesomeIcon
              icon={faPlus}
              size={13}
              style={{ color: "white", marginLeft: 2 }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 6,

            alignSelf: "flex-end",
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            size={20}
            style={{ color: "black", marginHorizontal: 12 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Groceries;
