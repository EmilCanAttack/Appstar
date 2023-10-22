import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
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

  const handleSignUp = async () => {
    // Tilføj logik til at logge ud her, f.eks. rydning af AsyncStorage-data

    // Naviger tilbage til SignUp-skærmen (eller en anden skærm efter din logik)
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={require('./assets/boldmørk.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Log ind</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log ind</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Har du ingen bruger?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupButton}>Tilmeld dig her</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signupText: {
    color: 'white',
    marginTop: 10,
  },
  signupButton: {
    color: 'blue',
    fontSize: 16,
  },
});

export default Login;
