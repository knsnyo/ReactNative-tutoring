import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function TodoItem({ id, todo, done, deleteTodo }) {
  return (
    <View styles={styles.container}>
      <Text>
        {todo}
        <TouchableOpacity onPress={deleteTodo(id)}>
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
