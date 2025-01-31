import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

function Header(props) {
    return <>
        <Image source={require('../../assets/logos/plant.png')}
                style={styles.logo}
              />
        <Text style={styles.title}>{props.title}</Text>
    </>
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    }
});

export default Header;