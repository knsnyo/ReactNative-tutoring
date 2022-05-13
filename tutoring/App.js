import { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import TodoInsert from "./component/todoInsert/TodoInsert";
import TodoList from "./component/todoList/todoList";
import User from "./component/user/User";
import { styles } from "./style";
import uuid from "uuid-random";

export default function App() {
  const student = {
    name: "김장현",
    msg: "용서하겠습니다",
    music: "웬디 - Goodbye",
  };

  const [todos, setTodos] = useState([{
    id: 1,
    text: "sex"
  },{
    id: 2,
    text: "sex"
  }]);

  const addTodos = (text) => {
    const newTodo = {
      id: uuid(),
      text: text,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const deleteTodos = (id) => (e) => {
    const deletedTodos = todos.filter(todo => todo.id !== id);
    setTodos(deletedTodos);
  }

  return (
    <View style={styles.container}>
      <User student={student}/>
      <TodoInsert addTodos={addTodos}/>
      <TodoList todos={todos} deleteTodos={deleteTodos}/>
    </View>
  );
}
