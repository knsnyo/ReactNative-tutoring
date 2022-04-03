import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Course from "./component/Course";

export default function App() {
  return (
    <View style={styles.container}>
      <Course name={"선형대수"} point={1}/>
      <Course name={"자료구조"} point={2}/>
      <Course name={"리눅스"} point={3}/>
      <Course name={"멘토링"} point={4}/>
      <Course name={"튜터링"} point={5}/>
      <StatusBar style="auto" />
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
