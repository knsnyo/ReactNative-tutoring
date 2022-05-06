import { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import TodoList from "./component/todoList/todoList";
import User from "./component/user/User";
import { styles } from "./style";

export default function App() {
  const student = {
    name: "김장현",
    msg: "용서하겠습니다",
    music: "웬디 - Goodbye",
  };

  const [num, setNum] = useState(1);
  const [todos, setTodos] = useState([]);

  const onPress = () => {
    let updateTodos = [...todos, num];
    setTodos(updateTodos);
    setNum(num+1);
  }

  useEffect(() => {
    console.log(`num: ${num}`);
  }, [num]);

  return (
    <View style={styles.container}>
      <User student={student}/>
      <TodoList todos={todos}/>
      <Button
      title="추가"
      onPress={onPress}
      />
    </View>
  );
}
