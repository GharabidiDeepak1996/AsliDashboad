// import React in our code
import React, { useState } from "react";
//import CustomButton from "../../SharedComponents/customButton";
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { CustomButton } from "../../SharedComponents/customButton";
//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

const WelcomeScreen = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  function renderNextButton() {
    return (
      <View style={{ marginBottom: 20 }}>
        <View>
          <CustomButton
            activeOpacity={0.5}
            buttonName="GETTING STARTED"
            onPress={() => {
              navigation.navigate("RegisterAsScreen");
            }}
          />
        </View>
      </View>
    );
  }

  const RenderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            resizeMode="cover"
            style={styles.introImageStyle}
            source={item.image}
          >
            <Image
              style={styles.introLogoStyle}
              resizeMode="contain"
              source={require("../../assets/asli_white_logo.png")}
            />
            <Text style={styles.introTextStyle}>{item.text}</Text>
          </ImageBackground>
          {/* <View
                style={{
                  flex: 0.6,
                  backgroundColor: item.backgroundColor,
                  alignItems: 'center',
                  justifyContent: 'space-around',
              
                
                }}>
                <Text style={styles.introTitleStyle}>
                  {item.title}
                </Text>
                <Image
                  style={styles.introImageStyle}
                  source={item.image} />

              </View>

              <View style={{flex:0.4}}>
              <Text style={styles.introTextStyle}>
                  {item.text}
                </Text>
              </View> */}
        </View>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          nextLabel="GEETING STARTED"
          doneLabel="GEETING STARTED"
          showSkipButton={false}
          showPrevButton={false}
          showDoneButton={true}
          showNextButton={true}
          renderDoneButton={renderNextButton}
          renderNextButton={renderNextButton}
          activeDotStyle={{ backgroundColor: "#D03B30" }}
          dotStyle={{ backgroundColor: "white" }}
          bottomButton={true}
          alwaysBounceVertical={true}
        />
      )}
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  introLogoStyle: {
    width: 200,
    height: 200,
    marginTop: 0,
  },
  introTextStyle: {
    fontSize: 36,
    fontStyle: "italic",
    color: "white",
    fontWeight: "900",
    textAlign: "center",
    marginTop: 340,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text: "Faster & Flexible\nDelivery of Goods",
    title: "Order Food/Grocery",
    image: require("../../assets/1.jpg"),
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Flight Booking",
    text: "Buy Necessities\nEasier & Cheaper",
    image: require("../../assets/2.jpg"),
    backgroundColor: "#febe29",
  },
];
