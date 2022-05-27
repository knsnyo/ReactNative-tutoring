import { View, Text } from "react-native";
import { styles } from "./style";

export default function TodoItem(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
