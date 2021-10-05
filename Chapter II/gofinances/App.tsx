import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Welcome } from './src/compoments/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title="Hello, Raul Sigoli, Tudo Bem ? "/>
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