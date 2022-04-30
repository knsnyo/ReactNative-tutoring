import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  user: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#ddd",
    borderBottomWidth: 1,
    padding: 10,
  },
  userPicture: {
    flex: 1,
		justifyContent: "center",
		alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 3,
  },
  userprofile: {
    flex: 2,
    width: "100%",
    height: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 40,
  },
  userInfo: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  username: {
    fontWeight: "bold",
  },
  userMusic: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  melon: {
    borderColor: "#0f0",
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
  },
});