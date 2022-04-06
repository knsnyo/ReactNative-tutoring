import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function TodoInsert({addTodo}) {
  const [item, setItem] = useState("");

  const addTodoHandler = () => {
    addTodo(item);
    setItem("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(e) => setItem(e)}
        placeholder="input"
        value={item}
      />
      <TouchableOpacity onPress={addTodoHandler}>
        <Icon name="search1" size={15} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
