import { useState, useContext } from "react";
import { View, TextInput, Pressable } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";
import { Context } from "../../context/Context";
import uuid from "uuid-random";

export default () => {
  const { state, dispatch } = useContext(Context);
	const [text, setText] = useState("");

	const onPress = () => {
		if("" !== text){
      const newTodo = {
        id: uuid(),
        text: text,
      }
      dispatch({type: "ADD", payload: newTodo});
			setText("");
		}
	}

	return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="입력하셈"
      />
      <Pressable 
				style={styles.press}
				onPress={onPress}
			>
        <Icon name="plus" size={30} />
      </Pressable>
    </View>
  );
}