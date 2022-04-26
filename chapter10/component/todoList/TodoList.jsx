import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../../context/Context";
import TodoItem from "../todoItem/TodoItem";
import { styles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";

export default function TodoList() {
  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      {/* 
			{state.todos.map((todo) => {
				return(
				<TodoItem key={todo.id} id={todo.id} text={todo.text}/>
				);
			})}
		*/}
      <SwipeListView 
			style={styles.list}
			data={state.todos}
			renderItem={(data) => (
				<TodoItem key={data.item.id} id={data.item.id} text={data.item.text}/>
			)}
			renderHiddenItem={() => (
				<View style={{
					alignItems: "center",
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
					<Text> HI </Text>
					<Text> BYE </Text>
				</View>
			)}
			leftOpenValue={70}
			rightOpenValue={-70}
			/>
    </View>
  );
}
