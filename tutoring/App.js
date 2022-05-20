import { View } from "react-native";
import TodoInsert from "./component/todoInsert/TodoInsert";
import TodoList from "./component/todoList/TodoList";
import User from "./component/user/User";
import { styles } from "./style";
import { ContextProvider } from "./context/Context";

export default function App() {
  const student = {
    name: "김장현",
    msg: "용서하겠습니다",
    music: "웬디 - Goodbye",
  };

  return (
    <ContextProvider>
      <View style={styles.container}>
        <User student={student} />
        <TodoInsert/>
        <TodoList/>
      </View>
    </ContextProvider>
  );
}
