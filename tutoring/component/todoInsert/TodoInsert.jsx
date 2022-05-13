import { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";

export default ({addTodos}) => {
	const [text, setText] = useState("");

	const onPress = () => {
		if("" !== text){
			addTodos(text);
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