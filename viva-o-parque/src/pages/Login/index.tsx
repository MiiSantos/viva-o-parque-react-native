import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logotipo.png')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Bem vindo(a)!</Text>
      <View style={styles.form}>
        <Text style={styles.textInput}>Usuário</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome de usuário' />
        <Text style={styles.textInput}>Senha</Text>
        <TextInput style={styles.input} placeholder='Digite sua senha' />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Não tem uma conta? Cadastre-se</Text>
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
  logo: {
    width: 220,
    height: 120,
    marginBottom: 10,
    borderRadius: 100,
  },
  titulo: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: 300,
  },
  button: {
    backgroundColor: '#669966',
    borderRadius: 60,
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 18, 
  },
  input: {
    borderRadius: 20,
    width: 250,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  footer: {
    color: '#fff',
    marginTop: 20,
  }
});