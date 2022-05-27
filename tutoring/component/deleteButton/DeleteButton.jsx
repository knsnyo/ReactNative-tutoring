import { useContext } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
import { styles } from "./style";

export default (props) => {
	const { state, dispatch } = useContext(Context);
	const deleteTodo = async () => {
		dispatch({ type: "DELETE", payload: props.id });
    //await axios.delete(endpoint + props.id);
	};

	return (
		<Pressable onPress={deleteTodo} style={styles.container}>
			<Icon name="delete" size={40} color={"#fff"} />
		</Pressable>
	)
}