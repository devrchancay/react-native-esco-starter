import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { HOME } from "../constants/routes";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const defaultStackScreenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: "center",
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={defaultStackScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
