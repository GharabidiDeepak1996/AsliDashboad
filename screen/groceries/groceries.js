import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { CustomAddToCart } from "./components/CustomAddToCart";
import { BackButton } from "./components/BackButton";
import SearchView from "./components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faPlus,
  faBorderAll,
  faBars,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ItemAvailableStoreModel from "./model/itemavailablestoremodel";

const Groceries = ({ navigation }) => {
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
        rp: "50,000",
      },
      {
        id: 2,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },

      {
        id: 3,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },
      {
        id: 4,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },
      {
        id: 5,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },
      {
        id: 6,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },
      {
        id: 7,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },
      {
        id: 8,
        src: require("../../assets/groceries/nissinministick.jpg"),
        text: "Kellogg Crunchy Granola Almonds & Cranberries 460g",
        rp: "50,000",
      },
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
      {/* ListCards */}
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 4,
            }}
            onStartShouldSetResponder={() => {
              navigation.navigate("ItemDetails", { props: item });
            }}
          >
            <View
              style={{
                width: 165,
                height: 200,
                borderRadius: 16,
                padding: 6,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Image */}
              <View
                style={{
                  width: "70%",
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
                  source={item.src}
                />
              </View>
              <Text
                style={{ fontWeight: "bold", fontSize: 11, marginVertical: 6 }}
              >
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
                <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                  Rp. 50,000
                </Text>
                <View
                  style={{
                    backgroundColor: "green",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onStartShouldSetResponder={() => {
                    setModalVisible(!modalVisible);
                    //  console.log("Call model", modalVisible);

                    //navigation.navigate("Groceries");
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
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          // setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={styles.centeredView}>
            <Text style={{ fontWeight: "700" }}>
              Kellogg's Crunchy Granola AlMonds & Cranberries 460g
            </Text>
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 8,
                padding: 12,
                margin: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "green",
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    color: "white",
                  }}
                >
                  Open
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ color: "black", marginRight: 2 }}
                  />
                  <Text style={{ fontWeight: "700", marginLeft: 2 }}>
                    Visit Shop
                  </Text>
                </View>
              </View>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
              >
                Muncul Jaya Motor
              </Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#666666" }}>stok: 19 Karton</Text>
                  <Text style={{ fontWeight: "bold" }}>Rp. 95,000/ Karton</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "green",
                      borderRadius: 5,
                      flexDirection: "row",
                      height: "100%",
                      width: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onStartShouldSetResponder={() => {
                      setModalVisible(!modalVisible);
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
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 12,
  },
});

export default Groceries;
