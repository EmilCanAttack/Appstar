// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Hent brugeroplysninger fra AsyncStorage
    const storedUserJSON = await AsyncStorage.getItem('user');
    if (storedUserJSON) {
      const storedUser = JSON.parse(storedUserJSON);
      if (storedUser.email === email && storedUser.password === password) {
        // Brugervalidering er vellykket, naviger til hjemmesiden
        navigation.navigate('Home');
      } else {
        alert('Forkert email eller adgangskode');
      }
    } else {
      alert('Brugeren findes ikke. Opret en konto først.');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
