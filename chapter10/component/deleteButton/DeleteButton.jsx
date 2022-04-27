import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

export default () => {
	const deleteTodo = () => {

	};

	return (
		<TouchableOpacity onPress={deleteTodo} style={styles.container}>
			<Icon name="delete" size={15} color={"#fff"} />
		</TouchableOpacity>
	)
}