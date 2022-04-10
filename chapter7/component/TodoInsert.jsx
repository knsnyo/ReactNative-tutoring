import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../context/Context";
import uuid from "uuid-random";

export default function TodoInsert() {
  const {state, dispatch} = useContext(Context);

  const [item, setItem] = useState("");

  const addTodoHandler = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: uuid(),
        text: item,
      }
    });
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
