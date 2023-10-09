import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
//https://jaymanyoo.medium.com/combine-bottom-tab-navigator-with-stack-navigator-in-react-native-2020-58804b4afded
import Tabs from "./navigation/tab";
import { ItemDetails } from "./screen";
import { CustomAddToCart } from "./screen/groceries/components/CustomAddToCart";
import WelcomeScreen from "./screen/welcome/WelcomeScreen";
import RegisterAsScreen from "./screen/Register/RegisterAsScreen";
import RegisterAsBuyer from "./screen/Register/RegisterAsBuyer";
import RegisterAsStore from "./screen/Register/RegisterAsStore";
import LoginPage from "./screen/Login/LoginPage";
import CheckOut from "./screen/checkout";
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        {/* RegisterAs */}
        <Stack.Screen
          name="RegisterAsScreen"
          component={RegisterAsScreen}
          options={{ headerShown: false }}
        />
        {/* Register as buyer */}
        <Stack.Screen
          name="RegisterAsStore"
          component={RegisterAsStore}
          options={{
            headerShown: true,
            title: "Register as a Shop",
            headerTitleStyle: {
              color: "#D03B30",
              // fontWeight: "bold", //Set Header text style
            },
            headerStyle: {
              backgroundColor: "white", //Set Header color
            },
            headerTintColor: "red", //Set Header text color

            headerTitleAlign: "center", //Header title on center
            headerShadowVisible: true, //set Header shadowvisible gone
          }}
        />

        {/* Register as store */}
        <Stack.Screen
          name="RegisterAsBuyer"
          component={RegisterAsBuyer}
          options={{
            headerShown: true,
            title: "Register as Buyer",
            headerTitleStyle: {
              color: "#D03B30",
              // fontWeight: "bold", //Set Header text style
            },
            headerStyle: {
              backgroundColor: "white", //Set Header color
            },
            headerTintColor: "red", //Set Header text color

            headerTitleAlign: "center", //Header title on center
            headerShadowVisible: true, //set Header shadowvisible gone
          }}
        />

        {/* LoginPage */}
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        {/* RegisterAs
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetails}
          options={{
            headerShown: true,
            headerRight: () => <CustomAddToCart />,
          }}
        />

        <Stack.Screen
          name="Checkout"
          component={CheckOut}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="FeaturesTabNavigation" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
