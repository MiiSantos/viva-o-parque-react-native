import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header/header';
import Textbox from '../../components/textbox/textbox';
import Button from '../../components/button/button';

function Register(props) {
    return <View style={styles.container}>
        <Header title='Criar sua conta.' />
        <View style={styles.form}>
            <Textbox label='Nome Completo' />
            <Textbox label='E-mail' />
            <Textbox label='Senha' />
            <Textbox label='Confirme sua senha' />
            <Button text='Confirmar' onPress={() => props.navigation.navigate("login")} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#88cc00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginTop: 20,
      width: 330,
    },
    footer: {
      color: '#fff',
      marginTop: 20,
    }
  });

export default Register;