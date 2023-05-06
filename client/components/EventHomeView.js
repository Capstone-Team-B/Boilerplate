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

const EventHomeView = ({ event }) => {
  return (
    <SafeAreaView>
      <View onPress={() => console.log("event clicked")}>
        <Text>{event.id}</Text>
        <Text>{event.mainTitle}</Text>
        <Text>
          {event.mainStartDate} - {event.mainEndDate}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default EventHomeView;
