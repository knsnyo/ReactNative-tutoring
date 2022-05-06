import { View, ScrollView, Text } from "react-native";
import { styles } from "./style";

export default ({todos}) => {

  const todoList = todos.map((todo) => {
    return (
      <View key={todo} style={styles.todoItem}>
        <Text>{todo}</Text>
      </View>
    );
  });

  return (
    <View style={styles.todoList}>
      <ScrollView style={{ width: "100%" }}>{todoList}</ScrollView>
    </View>
  );
};
