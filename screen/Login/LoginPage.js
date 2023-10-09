// import React in our code
import React, { useState } from "react";
import InputText from "../../SharedComponents/InputText";
import { useForm, Controller } from "react-hook-form";
import CheckBox from "expo-checkbox";

// import all the components we are going to use
import { Text, StyleSheet, View, Image } from "react-native";

import { CustomButton } from "../../SharedComponents/customButton";

const LoginPage = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("asdsadsad");
    navigation.navigate("FeaturesTabNavigation");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginHorizontal: 26, marginTop: 16 }}>
        <Image
          style={styles.introLogoStyle}
          resizeMode="contain"
          source={require("../../assets/asli_red_logo.png")}
        />

        <Text style={styles.textWelcomeBackStyle}>Welcome Back!</Text>

        <Text style={styles.textSigninToContiniueStyle}>
          Please sign in to continue
        </Text>

        <View style={{ marginTop: 20 }}>
          <InputText
            name="Mobile No"
            label="Mobile No."
            control={control}
            keyboardType="numeric"
            hint="Enter mobile no."
            rules={{
              required: "Please enter mobile number",
              minLength: {
                value: 10,
                message: "Mobile should be 10 characters long",
              },
            }}
          />

          <InputText
            name="Password"
            label="Password"
            control={control}
            hint="Enter password"
            secureTextEntry
            rules={{
              required: "Please enter password",
              minLength: {
                value: 5,
                message: "Password should be minimum 5 characters long",
              },
            }}
          />

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                color={"red"}
                style={{
                  marginEnd: 10,
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text>Remember me</Text>
            </View>

            <View style={{}}>
              <Text
                style={{ color: "#D03B30", fontWeight: "500" }}
                onPress={() => {
                  navigation.navigate("LoginPage");
                }}
              >
                {" "}
                Forget Password?
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <CustomButton
            activeOpacity={0.5}
            buttonName="Sign in"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
      <Text
        style={{
          alignSelf: "center",
          fontWeight: "300",
          fontSize: 16,
          position: "absolute",
          bottom: 25,
        }}
      >
        Don't have an account?
        <Text
          style={{ color: "#D03B30", fontWeight: "400" }}
          onPress={() => {
            navigation.navigate("RegisterAsScreen");
          }}
        >
          {" "}
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  introLogoStyle: {
    width: "100%",
    height: 60,
    marginTop: 80,
    alignSelf: "center",
  },
  introLoginDoodleStyle: {
    width: "100%",
    marginTop: 30,
    alignSelf: "center",
  },
  textWelcomeBackStyle: {
    fontSize: 32,
    marginTop: 40,
    fontWeight: "600",
  },
  textSigninToContiniueStyle: {
    fontSize: 17,
    fontWeight: "300",
  },
});

export default LoginPage;
