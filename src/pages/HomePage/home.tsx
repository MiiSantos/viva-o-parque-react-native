import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Events from '../../components/events/events';
import posts from '../../mocks/posts';
import Textbox from '../../components/textbox/textbox';

export default function HomePage(props) {
    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../../assets/logos/logotipo.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>VIVA O PARQUE!</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("login")}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../assets/logos/search.png')} style={styles.searchLogo} />
                <Textbox placeholder="Busque um evento." />
            </View>
            <View style={styles.container}>
                <Events dados={posts} />
            </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        padding: 10,
        backgroundColor: '#669966',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    logoText: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'white',
    },
    searchLogo: {
        width: 25,
        height: 25,
        marginLeft: 5,
    },
    button: {
        backgroundColor: '#669966',
        width: 80,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    }
});
