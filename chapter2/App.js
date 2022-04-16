import { Image, StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import Profile from "./Profile.jpg"

export default function App() {
  const todos = [
    "const변수",
    "JSX 문법",
    "array",
    "function",
    "JSX 문법",
    "array",
    "function",
    "JSX 문법",
    "array",
    "function",
    "JSX 문법",
    "array",
    "function",
    "JSX 문법",
    "array",
    "function",
  ];
  const student = {
    name: "김장현",
    msg: "용서하겠습니다",
    music: "웬디 - Goodbye",
  };
  const todoList = todos.map((todo) => {
    return (
      <View style={styles.todoItem}>
        <Text>{todo}</Text>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userPicture}>
          <Image style={styles.userprofile} source={Profile}/>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{student.name}</Text>
          <Text>{student.msg}</Text>
        </View>
        <View style={styles.userMusic}>
          <Text style={styles.melon}>{student.music}</Text>
        </View>
      </View>
      <View style={styles.todoList}>
        <ScrollView style={{ width: "100%" }}>{todoList}</ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  user: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  userPicture: {
    flex: 1,
  },
  userprofile: {
    width: 100,
    height: 100,
  },
  userInfo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  username: {
    fontWeight: "bold",
  },
  userMusic: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  melon: {
    borderColor: "green",
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
  },
  todoList: {
    flex: 8,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
  },
  todoItem: {
    width: "100%",
    borderColor: "#ddd",
    borderBottomWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
