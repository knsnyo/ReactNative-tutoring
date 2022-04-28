import React, { useContext, useEffect } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import TodoInsert from "./component/todoInsert/TodoInsert";
import TodoList from "./component/todoList/TodoList";
import { Context, ContextProvider } from "./context/Context";
import { styles } from "./style";
import Modal from "./component/modal/modal";
import AddButton from "./component/addButton/AddButton";

export default function App() {

  return (
    <ContextProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.search}>
          <TodoInsert />
        </View>
        <View style={styles.list}>
          <TodoList />
        </View>
        <View style={styles.button}>
          <AddButton />
        </View>
        <Modal />
      </SafeAreaView>
    </ContextProvider>
  );
}
