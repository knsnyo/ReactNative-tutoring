import { useContext, useEffect } from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./style";
import { Context } from "../../context/Context";

export default () => {
	const { state, dispatch } = useContext(Context);
	useEffect(() => {
		console.log(state);
	}, []);
	const hide = () => {
		dispatch({type: "MODAL_END"});
	}

	return(
		<Modal
		isVisible={state.isVisible}
		onBackdropPress={hide}
		avoidKeyboard
		style={styles.modal}>
			<View style={styles.container}>
				<TextInput placeholder="할 일 추가"/>
			</View>
		</Modal>
	)	
}