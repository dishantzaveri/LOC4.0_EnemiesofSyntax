import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, useTheme } from 'react-native-paper';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tok, setTok] = useState();
  const { colors } = useTheme();

  console.log(email);
  const saveData = async () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://joshiyash05.pythonanywhere.com/account/login/',
      headers: {
        'Authorization': 'Token 60a6b5ea81823c883d178b7b2ad57b618d712707'
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (


    <Background>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCompleteType="password"
        keyboardType="default"
      />
      <Button
        mode="contained"
        onPress={() => {
          saveData();
          navigation.navigate('bottomtabs');
        }}
        style={{ marginTop: 6, color: "#000000" }}>
        LOGIN
      </Button>
      <View style={styles.row}>
        <Text style={styles.best}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  best: {

    color: '#3BCBFF',
    fontWeight: 'bold',
  },

  link: {
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
