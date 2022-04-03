import React from "react";
import { Text } from "react-native";

export default (props) => {
	return(
		<Text>{props.course} is {props.done ? "true" : "false"}</Text>
	)
}