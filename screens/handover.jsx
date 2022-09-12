import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Handover() {
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  console.log(date);

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

  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
        placeholderTextColor="whitesmoke"
        placeholder={"What to we have left?"}
        editable
        maxLength={40}
      />
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bread / Pastries</Text>
          <View>
            <UselessTextInput
              multiline
              numberOfLines={4}
              style={{ padding: 10, color: "whitesmoke" }}
            />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Coffee</Text>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>EXAMPLE</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>EXAMPLE</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Sandwich</Text>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>EXAMPLE</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>EXAMPLE</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Food Service</Text>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>EXAMPLE</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>EXAMPLE</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.buttonContainer}
            activeOpacity={0.8}
          >
            <Text style={{ color: "white" }}>Date</Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f2a",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    color: "whitesmoke",
  },

  text: {
    top: 20,
    color: "whitesmoke",
  },

  viewRowInput: {
    flexDirection: "row",
  },

  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
