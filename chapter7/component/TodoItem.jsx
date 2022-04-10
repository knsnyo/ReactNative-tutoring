import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../context/Context";

export default function TodoItem(props) {
  const { state, dispatch } = useContext(Context);

  const deleteTodo = () => {
    const id = props.id;
    dispatch({type: 'DELETE', payload: id})
  }

  return (
    <View styles={styles.container}>
      <Text>
        {props.text}
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="delete" size={15} />
        </TouchableOpacity>
      </Text>
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
