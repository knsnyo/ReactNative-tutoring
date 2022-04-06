import React from "react";
import { View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList({todos, deleteTodo}) {
  return (
		<View style={styles.container}>
			{todos.map((todo) => {
				return(<TodoItem key={todos.id} {...todo} deleteTodo={deleteTodo}/>);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
