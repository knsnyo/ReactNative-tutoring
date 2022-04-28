import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
//import axios from "axios";
//import { endpoint } from "../context/Context";
import { updateData } from "../../api/asyncStorage";
import { styles } from "./style";

export default function TodoItem(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
