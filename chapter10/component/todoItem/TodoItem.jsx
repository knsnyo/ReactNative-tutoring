import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
//import axios from "axios";
//import { endpoint } from "../context/Context";
import { deleteData, updateData } from "../../api/asyncStorage";
import { styles } from "./style";

export default function TodoItem(props) {
  const { state, dispatch } = useContext(Context);

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const changeMode = async () => {
    if (editMode) {
      const changeTodo = {
        id: props.id,
        text: editText,
      };
      dispatch({ type: "EDIT", payload: changeTodo });
      //await axios.put(endpoint + changeTodo.id, changeTodo);
      updateData(changeTodo);
    }
    setEditMode(!editMode);
  };

  const deleteTodo = async () => {
    dispatch({ type: "DELETE", payload: props.id });
    //await axios.delete(endpoint + props.id);
    deleteData(props.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeMode} style={styles.touch}>
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
      <TouchableOpacity onPress={deleteTodo} style={styles.touch}>
        <Icon name="delete" size={15} color={"red"} />
      </TouchableOpacity>
    </View>
  );
}
