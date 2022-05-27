import React, { useContext } from "react";
import { View } from "react-native";
import { Context } from "../../context/Context";
import TodoItem from "../todoItem/TodoItem";
import { styles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";

export default function TodoList() {
  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <SwipeListView 
			style={styles.list}
			data={state.todos}
			renderItem={(data) => (
				<TodoItem key={data.item.id} id={data.item.id} text={data.item.text}/>
			)}
			renderHiddenItem={(data) => (
				<View style={{
					alignItems: "center",
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
					<EditButton id={data.item.id} text={data.item.text}/>
					<DeleteButton id={data.item.id}/>
				</View>
			)}
			leftOpenValue={70}
			rightOpenValue={-70}
			/>
    </View>
  );
}
