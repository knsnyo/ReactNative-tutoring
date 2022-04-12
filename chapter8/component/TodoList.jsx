import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/Context";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const { state, dispatch } = useContext(Context);

  return (
		<View style={styles.container}>
			{state.todos.map((todo) => {
				return(
				<TodoItem key={todo.id} id={todo.id} text={todo.text}/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
		width: "100%",
		backgroundColor: "#fff",
  },
});
