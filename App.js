import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Components/Home";
import Settings from "./Components/Settings";

const Stack = createNativeStackNavigator();

export default function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#A9DDD6", alignItems: "center" },
          headerTitleStyle: { fontSize: 24, fontFamily: "monospace" },
        }}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Settings} name="Settings" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
