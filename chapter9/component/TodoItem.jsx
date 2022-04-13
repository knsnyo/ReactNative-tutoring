import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../context/Context";

export default function TodoItem(props) {
  const { state, dispatch } = useContext(Context);

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const changeMode = () => {
    if (editMode) {
      dispatch({ type: "EDIT", payload: { id: props.id, text: editText } });
    }
    setEditMode(!editMode);
  };

  const deleteTodo = () => {
    dispatch({ type: "DELETE", payload: props.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeMode}>
        <Icon name="edit" size={15} color={"blue"} />
      </TouchableOpacity>
      {editMode ? (
        <TextInput
          value={editText}
          style={styles.input}
          onChangeText={setEditText}
          autoFocus
        />
      ) : (
        <Text>{props.text}</Text>
      )}
      <TouchableOpacity onPress={deleteTodo}>
        <Icon name="delete" size={15} color={"red"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: "100%",
    backgroundColor: "#fff",
    height: 40,
  },
  input: {
    textAlign: "center",
  },
});
