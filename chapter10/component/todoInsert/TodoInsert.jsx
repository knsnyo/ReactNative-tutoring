import { View, Text } from "react-native";
import { styles } from "./style"

export default function TodoInsert() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To Do List</Text>      
    </View>
  );
}