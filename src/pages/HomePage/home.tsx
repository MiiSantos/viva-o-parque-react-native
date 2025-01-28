import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Events from '../../components/events/events';
import posts from '../../mocks/posts';
// ScrollView

export default function HomePage(props) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
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
            <Events dados={posts} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    logoText: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#669966',
    },
    button: {
        backgroundColor: '#669966',
        width: 80,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    }
});
