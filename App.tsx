import HomeScreen from "./app/screens/HomeScreen";
import CountryScreen from "./app/screens/CountryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ConuntryContext } from "./app/utils/counteryContex";
import { CountiesDataType } from "./app/utils/Model";
import CapitalWeatherScreen from "./app/screens/CapitalWeatherScreen";

const Stack = createNativeStackNavigator();

function App() {
  const [country, setCountry] = useState<CountiesDataType[]>([]);
  const [capital, setCapital] = useState<string>("");
  return (
    <NavigationContainer>
      <ConuntryContext.Provider
        value={{ country, capital, setCountry, setCapital }}
      >
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CountryScreen" component={CountryScreen} />
          <Stack.Screen
            name="CapitalWeatherScreen"
            component={CapitalWeatherScreen}
          />
        </Stack.Navigator>
      </ConuntryContext.Provider>
    </NavigationContainer>
  );
}

export default App;
