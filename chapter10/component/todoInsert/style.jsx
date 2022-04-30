import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#000",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
  },
  input: {
    width: "80%",
    height: 15,
    textAlign: "center",
  },
  text: {
    flex: 9,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
  },
});