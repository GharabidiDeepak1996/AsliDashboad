import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
//https://jaymanyoo.medium.com/combine-bottom-tab-navigator-with-stack-navigator-in-react-native-2020-58804b4afded
import Tabs from "./navigation/tab";
import { ItemDetails } from "./screen";
import { CustomAddToCart } from "./screen/groceries/components/CustomAddToCart";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FeaturesTabNavigation"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetails}
          options={{
            headerShown: true,
            headerRight: () => <CustomAddToCart />,
          }}
        />
        <Stack.Screen name="FeaturesTabNavigation" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
