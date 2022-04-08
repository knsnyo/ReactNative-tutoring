import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  const todos = ["김장현", "const변수", "JSX 문법", "array", "function"];

  const todoList = todos.map((todo) => {
    return (<Text style={styles.todo}>{todo}</Text>);
  });

  return <SafeAreaView style={styles.container}>{todoList}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  todo: {
    backgroundColor: "#ddd",
  }
});
