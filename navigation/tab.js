import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  HomeScreen,
  GroceryScreen,
  FoodScreen,
  CourierScreen,
  AccountScreen,
  AllCategoriesScreen,
} from "../screen";
import { View, Text } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faBowlFood,
  faStore,
  faUser,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Grocery"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",

        tabBarStyle: {
          height: 55,
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          //fontSize: 6,
          padding: 6,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={26}
              style={{ marginBottom: -8, color: focused ? "red" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarLabel: "Food",
          tabBarLabelStyle: { fontSize: 12 },

          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faBowlFood}
              size={26}
              style={{ marginBottom: -8, color: focused ? "red" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Grocery"
        component={GroceryStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Grocery",
          tabBarLabelStyle: { fontSize: 12 },

          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <FontAwesomeIcon
                icon={faStore}
                size={26}
                style={{ marginBottom: -8, color: focused ? "red" : "black" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Courier"
        component={CourierScreen}
        options={{
          tabBarLabel: "Courier",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faBox}
              size={26}
              style={{ marginBottom: -8, color: focused ? "red" : "black" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faUser}
              size={26}
              style={{ marginBottom: -8, color: focused ? "red" : "black" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function GroceryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GroceryScreen" component={GroceryScreen} />
      <Stack.Screen
        name="AllCategoriesScreen"
        component={AllCategoriesScreen}
        options={{
          headerTitle: "All Categories",
        }}
      />
    </Stack.Navigator>
  );
}
export default Tabs;
