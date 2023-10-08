import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const { height, width } = Dimensions.get("window");

const ItemDetails = ({ navigation, route }) => {
  console.log("id", route.params.props.id);
  const { id, text } = { ...route.params.props };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.props.text,
      //   headerLeft: () => <BackButton />,
      //   headerRight: () => <CustomAddToCart navigationProps={navigation} />,
    });
  }, [navigation]);
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            padding: 18,
            backgroundColor: "white",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ fontWeight: "600", fontSize: 20, textAlign: "center" }}
            >
              {text}
            </Text>
          </View>
          <View
            style={{
              height: height / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onScroll={(e) => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / width).toFixed(0));
              }}
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      width: width - 50,
                      height: height / 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      disabled={true}
                      style={{
                        width: "90%",
                        height: "90%",
                        backgroundColor: "green",
                        borderRadius: 10,
                      }}
                    ></TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((item, index) => {
              return (
                <View
                  style={{
                    width: currentIndex == index ? 50 : 8,
                    height: currentIndex == index ? 10 : 8,
                    borderRadius: currentIndex == index ? 5 : 4,
                    backgroundColor: currentIndex == index ? "green" : "gray",
                    marginLeft: 5,
                  }}
                ></View>
              );
            })}
          </View>
          <View
            style={{
              backgroundColor: "#f2f2f2",
              width: "100%",
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
              marginTop: 16,
              padding: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 22,
                padding: 16,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Product Information</Text>
                <Text>icon</Text>
              </View>
              <View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Brand</Text>
                  <Text>Kellogg's</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Diet Type</Text>
                  <Text>Vegetarian</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Diet Type</Text>
                  <Text>Vegetarian</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Diet Type</Text>
                  <Text>Vegetarian</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text>Diet Type</Text>
                  <Text>Vegetarian</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ItemDetails;
