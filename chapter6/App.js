import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {id: Math.random.toString(), todo: text, done: false}
    ])
  };

  const deleteTodo = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TodoInsert addTodo={addTodo}/>
      </View>
      <View style={styles.list}>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  list: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  }
});
