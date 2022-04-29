import { useState, useContext } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";
import { Context } from "../../context/Context";

export default (props) => {
  const { state, dispatch } = useContext(Context);

	const press = () => {
		dispatch({type: "MODAL_EDIT", payload: props.id});
	}

	return (
		<Pressable onPress={press} style={styles.container}>
			<Icon name="edit" size={40} color={"#fff"} />
		</Pressable>
	)
}