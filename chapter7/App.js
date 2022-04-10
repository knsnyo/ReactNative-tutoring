import React from "react";
import { StyleSheet, View } from "react-native";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import { ContextProvider } from "./context/Context";

export default function App() {

  return (
    <ContextProvider>
      <View style={styles.container}>
        <View style={styles.search}>
          <TodoInsert/>
        </View>
        <View style={styles.list}>
          <TodoList/>
        </View>
      </View>
    </ContextProvider>
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
  },
});
