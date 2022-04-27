import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

export default () => {
	const editTodo = () => {

	};

	return (
		<TouchableOpacity onPress={editTodo} style={styles.container}>
			<Icon name="edit" size={15} color={"#fff"} />
		</TouchableOpacity>
	)
}