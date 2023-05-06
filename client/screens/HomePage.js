import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context';
import EventHomeView from '../components/EventHomeView';

const dummyEvents = [
    {
        id: 1,
        userId: 1,
        hostName: "Kit",
        hostDisplayName: "Kit & Pedro",
        mainEventType: "Wedding",
        mainTitle: "Kit & Pedro's Wedding",
        mainStartDate: "July 2, 2023",
        mainEndDate: "July 9, 2023",
        mainStartTime: "",
        mainEndTime: "",
        location: "Florence, Italy",
        subEvents: [
            {
                subEventId: 1,
                subEventType: "Reception",
                subStartDate: "July 2, 2023",
                subEndDate: "July 2, 2023",
                subStartTime: "19:00",
                subEndTime: "22:00",
                location: "Florence, Italy",
                address: "100 Leonardo daVinci Blvd",
                subEventTitle: "Welcome Party",
                subDescription: "Join us for drinks to kick off the celebrations",
            }, {
                subEventId: 2,
                subEventType: "Ceremony",
                subStartDate: "July 3, 2023",
                subEndDate: "July 3, 2023",
                subStartTime: "16:00",
                subEndTime: "16:30",
                location: "Florence, Italy",
                address: "Pitti Palace",
                subEventTitle: "Ceremony",
                subDescription: "",
            }, {
                subEventId: 3,
                subEventType: "Reception",
                subStartDate: "July 3, 2023",
                subEndDate: "July 3, 2023",
                subStartTime: "16:30",
                subEndTime: "23:00",
                location: "Florence, Italy",
                address: "Pitti Palace",
                subEventTitle: "Reception",
                subDescription: "",
            }, {
                subEventId: 4,
                subEventType: "Reception",
                subStartDate: "July 3, 2023",
                subEndDate: "July 4, 2023",
                subStartTime: "23:00",
                subEndTime: "01:00",
                location: "Florence, Italy",
                address: "HardRock Cafe",
                subEventTitle: "After Party",
                subDescription: "",
            }, {
                subEventId: 3,
                subEventType: "",
                subStartDate: "July 4, 2023",
                subEndDate: "July 9, 2023",
                subStartTime: "",
                subEndTime: "",
                location: "Florence, Italy",
                address: "Our Tuscan villa",
                subEventTitle: "Vacation",
                subDescription: "Please join us at our Tuscan villa",
            }
        ]
    }, {
        id: 2,
        userId: 2,
        hostName: "Jeffrey",
        hostDisplayName: "Ina & Jeffrey",
        mainEventType: "Party",
        mainTitle: "Summer Garden Party",
        mainStartDate: "June 1, 2023",
        mainEndDate: "June 1, 2023",
        mainStartTime: "12:00",
        mainEndTime: "15:00",
        location: "East Hampton, New York",
        subEvents: []
    }
]

const HomePage = () => {

    // will need to sort events array by date
    // refactor array.map to <Flatlist />

    return (
        <KeyboardAwareScrollView contentCotainerStyle={styles.container}>
            <SafeAreaView style={styles.container}>
            {dummyEvents.map((event) => (
                <EventHomeView key={event.id} event={event}/>
            ))}
        </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderColor: "red",
    }
})

export default HomePage
