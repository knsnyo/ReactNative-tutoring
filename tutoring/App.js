import { View } from "react-native";
import TodoList from "./component/todoList/todoList";
import User from "./component/user/User";
import { styles } from "./style";

export default function App() {
	const todos = [
    "const변수",
    "JSX 문법",
    "array",
    "function",
  ];
  const student = {
    name: "김장현",
    msg: "용서하겠습니다",
    music: "웬디 - Goodbye",
  };

  return (
    <View style={styles.container}>
      <User student={student}/>
      <TodoList todos={todos}/>
    </View>
  );
}
