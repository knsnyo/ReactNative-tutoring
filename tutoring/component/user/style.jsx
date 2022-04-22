import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
		justifyContent: "center",
		alignItems: "center",
    width: "100%",
    height: "100%",
  },
  userprofile: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  userInfo: {
    flex: 6,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  username: {
    fontWeight: "bold",
  },
  userMusic: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  melon: {
    borderColor: "green",
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
  },
});