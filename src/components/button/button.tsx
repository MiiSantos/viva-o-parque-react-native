import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function Button(props) {
    return <>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#88cc00',
        borderRadius: 6,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default Button;