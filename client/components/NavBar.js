import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomePage from "../screens/HomePage";

const Tab = createBottomTabNavigator()

const NavBar = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}/>
        </Tab.Navigator>
    )
}

export default NavBar