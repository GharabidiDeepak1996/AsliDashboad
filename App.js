import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
//https://jaymanyoo.medium.com/combine-bottom-tab-navigator-with-stack-navigator-in-react-native-2020-58804b4afded
import Tabs from "./navigation/tab";
import Groceries from "./screen/groceries/groceries";
import { BackButton } from "./screen/groceries/components/BackButton";
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Stack.Navigator>
        <Stack.Screen name="Groceries" component={Groceries} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
export default App;
