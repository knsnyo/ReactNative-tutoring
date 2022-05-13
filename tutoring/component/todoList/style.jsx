import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  todoList: {
    flex: 8,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  hidden: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    alignItems:"center",
    justifyContent:"center",
    width: 70,
  }
});
