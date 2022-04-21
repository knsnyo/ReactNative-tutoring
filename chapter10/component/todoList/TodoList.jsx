import React, { useContext } from "react";
import { View } from "react-native";
import { Context } from "../../context/Context";
import TodoItem from "../todoItem/TodoItem";
import { styles } from "./style";

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
