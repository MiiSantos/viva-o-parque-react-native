import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

function Textbox(props) {
    return <>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput style={styles.input} placeholder={props.placeholder} />
    </>
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#696969',
        marginBottom: 5,
    },
    input: {
        width: 300,
        backgroundColor: '#F5F5F5',
        borderRadius: 6,
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        marginBottom: 5,
    }
});

export default Textbox;