import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/header/header';
import Textbox from '../../components/textbox/textbox';
import Button from '../../components/button/button';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Header title='Acesse sua conta.' />
      <View style={styles.form}>
        <View>
          <Textbox label='Usuário' />
        </View>

        <View>
          <Textbox label='Senha' />
        </View>

        <View>
          <Button onPress={() => props.navigation.navigate("home")} text='Acessar' />
        </View>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate("register")}>
        <Text style={styles.footer}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#669966',
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