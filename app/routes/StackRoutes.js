import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Routes";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
