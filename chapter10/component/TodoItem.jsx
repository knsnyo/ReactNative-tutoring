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
//import axios from "axios";
//import { endpoint } from "../context/Context";
import { deleteData } from "../api/asyncStorage";

export default function TodoItem(props) {
  const { state, dispatch } = useContext(Context);

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const changeMode = async () => {
    if (editMode) {
      const changeTodo = {
        id: props.id,
        text: editText
      }
      // await axios.put(endpoint + changeTodo.id, changeTodo);
      dispatch({ type: "EDIT", payload: changeTodo });
    }
    setEditMode(!editMode);
  };

  const deleteTodo = async () => {
    //await axios.delete(endpoint + props.id);
    dispatch({ type: "DELETE", payload: props.id });
    deleteData(props.id);
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
