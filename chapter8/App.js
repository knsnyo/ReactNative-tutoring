import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import { ContextProvider } from "./context/Context";
import { StatusBar } from "expo-status-bar";

export default function App() {

  return (
    <ContextProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <TodoInsert/>
        </View>
        <View style={styles.list}>
          <TodoList/>
        </View>
        <StatusBar style="light"/>
      </SafeAreaView>
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
    width: "100%",
  },
  list: {
    flex: 11,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
});
