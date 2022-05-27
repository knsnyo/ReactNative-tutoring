import { useContext } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default () => {
	const { state, dispatch } = useContext(Context);
	const press = () => {
		dispatch({type: "MODAL_ADD"});
	}

	return (
		<Pressable onPress={press} style={styles.button}>
			<Icon name="plus" size={40} color={"green"} />
		</Pressable>
	)
}