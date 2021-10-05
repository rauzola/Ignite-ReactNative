/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    Platform,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Raul</Text>

        <TextInput
            style={styles.input}
            placeholder="New skell"
            placeholderTextColor="#555"
        />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text  style={[styles.title, {marginTop: 50}]}>
            My Skills
        </Text>

      </View>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});
