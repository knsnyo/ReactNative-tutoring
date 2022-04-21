import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import TodoInsert from "./component/todoInsert/TodoInsert";
import TodoList from "./component/todoList/TodoList";
import { ContextProvider } from "./context/Context";
import { styles } from "./style";

export default function App() {
  return (
    <ContextProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <View style={styles.search}>
          <TodoInsert/>
        </View>
        <View style={styles.list}>
          <TodoList/>
        </View>
      </SafeAreaView>
    </ContextProvider>
  );
}

