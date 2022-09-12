import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/style"

export default function Handover() {
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Date Picker with Text Input</Text>
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.buttonContainer}
        activeOpacity={0.8}
      >
        <Text>Select Date of Birth</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
