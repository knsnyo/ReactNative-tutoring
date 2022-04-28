import React, { useState, useContext } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
import uuid from "uuid-random";
//import { endpoint } from "../context/Context";
//import axios from "axios";
import { addData } from "../../api/asyncStorage";
import { styles } from "./style"

export default function TodoInsert() {
  const { state, dispatch } = useContext(Context);

  const [item, setItem] = useState("");

  const addTodoHandler = async () => {
    if("" !== item){
      const newTodo = {
        id: uuid(),
        text: item,
      }
      dispatch({
        type: "ADD",
        payload: newTodo,
      });
      //await axios.post(endpoint, newTodo);
      addData(newTodo);
    }
    setItem("");
  };

  return (
    <View style={styles.container}>
      {/*
      <TextInput
        onChangeText={(e) => setItem(e)}
        placeholder="할 일 적어"
        value={item}
        style={styles.input}
      />
      <Pressable onPress={addTodoHandler} style={styles.button}>
        <Icon name="plus" size={15} />
      </Pressable>
    */}
      <Text style={styles.text}>To Do List</Text>      
    </View>
  );
}