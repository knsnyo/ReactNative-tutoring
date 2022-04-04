import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Star from "./Star";

const url = "https://oblador.github.io/react-native-vector-icons/";

export default (props) => {
	const [point, setPoint] = useState(props.point)
  return (
    <View style={styles.container}>
      <Text>{props.name}의 강의평가 점수: </Text>
			<Star point={props.point}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
