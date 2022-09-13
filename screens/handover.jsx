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
          <Text style={styles.title}>Coffee and Milks</Text>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>Coffee Bags</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
            <Text style={styles.text}>Whole Milk</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
            <Text style={styles.text}>Skimed Milk</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
          </View>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>Soya Milk</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
            <Text style={styles.text}>Oat Milk</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Sandwich</Text>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>Packs Parma Ham</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
            <Text style={styles.text}>Mozzarella</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>Romesco</Text>
            <TextInput keyboardType="numeric" style={styles.input} />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Food Service</Text>
          <Text style={{ textAlign: "center", color: "whitesmoke", fontSize: 10 }}>Raw Meats</Text>
          <View style={styles.viewRowInput}>
            <Text style={styles.text}>Raw Chicken Box</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Skinless Chicken Box</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>sd</Text>
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
    textAlign: "center",
  },

  text: {
    top: 20,
    color: "whitesmoke",
  },

  viewRowInput: {
    flexDirection: "row",
    justifyContent: "center",
  },

  input: {
    height: 40,
    width: 36,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
