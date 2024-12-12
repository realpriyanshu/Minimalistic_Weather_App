import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Wheather from './src/index.js';

export default function App() {
  return (
    <View style={styles.container}>
    <Wheather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems:'center',
    justifyContent:'center'
  },
});
