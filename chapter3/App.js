import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyList from './component/MyList';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <MyList course={"props"} done={true}/>
      <MyList course={"state"} done={false}/>
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
