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
import { CustomButton } from "../../SharedComponents/customButton";
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

  let listData = [
    { id: 1, productInfoLabel: "Brand", productInfoValue: "Kellogg" },
    { id: 2, productInfoLabel: "Diet Type", productInfoValue: "Vegetarian" },
    {
      id: 3,
      productInfoLabel: "Flavour",
      productInfoValue: "Almond, Cranberry",
    },
    {
      id: 4,
      productInfoLabel: "Age Range (Description)",
      productInfoValue: "Adult ",
    },
    { id: 5, productInfoLabel: "Item Form", productInfoValue: "Puff, Flake" },
    {
      id: 6,
      productInfoLabel: "Speciality",
      productInfoValue: "No Preservatives",
    },
    { id: 7, productInfoLabel: "Net Quantity", productInfoValue: "460.0 gram" },
  ];
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
                        width: "70%",
                        height: "80%",
                        backgroundColor: "green",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
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
            {/* Product Info */}
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 22,
                padding: 16,
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginBottom: 12 }}
                >
                  Product Information
                </Text>
                <Text>icon</Text>
              </View>
              <View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Brand
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Kellogg's
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Brand
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Kellogg's
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Brand
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Kellogg's
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Brand
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Kellogg's
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Brand
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Kellogg's
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Brand
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    Kellogg's
                  </Text>
                </View>
              </View>
            </View>

            {/* Description */}
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 22,
                padding: 16,
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginBottom: 12 }}
                >
                  Description
                </Text>
                <Text>icon</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  Nourishing & Tasty Breakfast Cereal – Start your day with a
                  nourishing breakfast such as Kellogg’s Crunchy Granola which
                  is quick to prepare and yummy to eat. It is infused with the
                  goodness of multigrain and yummy fruits & nuts making for a
                  nourishing and a tasty meal.
                </Text>
              </View>
            </View>

            <CustomButton
              activeOpacity={0.5}
              buttonName="ADD TO CART"
              onPress={() => {
                navigation.navigate("RegisterAsScreen");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ItemDetails;
