import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type text"
          value={value}
          onChangeText={inputHandler}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    justifyContent: "flex-end",
    paddingBottom: 30
  },
});