import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const myName = "myName";
  const todos = [
    "const변수",
    "JSX 문법",
  ];
  const todoList = todos.map((todo) => {
    return (<Text>{todo}</Text>);
  });

  return (
    <View style={styles.container}>
      <Text>{myName}</Text>
      <StatusBar style="auto" />
      {todoList}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
