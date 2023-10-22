import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      // Check if either email or password is empty, and display an error message if true.
      alert('Both email and password are required.');
      return;
    }

    // If both email and password are provided, proceed with sign-up.
    // Save user information in AsyncStorage as JSON.
    const user = { email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));

    // Navigate to the Login screen.
    navigation.navigate('Login');
  };

  const handleLogin = async () => {
    // Add logout logic here, for example, clearing AsyncStorage data.

    // Navigate back to the SignUp screen or another screen based on your logic.
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('./assets/boldmørk.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
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
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Already on Go' Kamp?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginButton}>Log In</Text>
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
  signupButton: {
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
  loginText: {
    color: 'white',
    marginTop: 10,
  },
  loginButton: {
    color: 'blue',
    fontSize: 16,
  },
});

export default SignUp;
