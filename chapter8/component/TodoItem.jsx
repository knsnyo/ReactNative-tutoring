import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../context/Context";

export default function TodoItem(props) {
  const { state, dispatch } = useContext(Context);

  const deleteTodo = () => {
    const id = props.id;
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress>
        <Icon name="edit" size={15} />
      </TouchableOpacity>
      <Text>{props.text}</Text>
      <TouchableOpacity onPress={deleteTodo}>
        <Icon name="delete" size={15} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
