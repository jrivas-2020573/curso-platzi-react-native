import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Curso React Plazi</Text>
        <Saludar firstname="Daniel" lastName="Rojo" />
        <Saludar firstname="Noagarro" lastName="Kenderson" />
      </View>
    </NavigationContainer>
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
