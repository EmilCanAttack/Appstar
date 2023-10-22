import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  // State til at opbevare brugerens email og adgangskode.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Funktion til at håndtere log ind.
  const handleLogin = async () => {
    // Hent brugeroplysninger fra AsyncStorage.
    const storedUserJSON = await AsyncStorage.getItem('user');
    if (storedUserJSON) {
      const storedUser = JSON.parse(storedUserJSON);
      if (storedUser.email === email && storedUser.password === password) {
        // Brugervalidering er vellykket, naviger til hjemmesiden.
        navigation.navigate('Home');
      } else {
        // Vis en fejlbesked, hvis email eller adgangskode er forkert.
        alert('Forkert email eller adgangskode');
      }
    } else {
      // Vis en fejlbesked, hvis brugeren ikke findes.
      alert('Brugeren findes ikke. Opret en konto først.');
    }
  };

  // Funktion til at håndtere tilmelding.
  const handleSignUp = async () => {
    // Tilføj log ud-logik her, f.eks. sletning af AsyncStorage-data.

    // Naviger tilbage til Tilmeld Dig-skærmen (eller en anden skærm baseret på din logik).
    navigation.navigate('SignUp');
  };

  return (
    // Brug et baggrundsbillede til hele skærmen.
    <ImageBackground source={require('./assets/boldmørk.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Log ind</Text>
        {/* Inputfelt til email. Brugerværdi er bundet til "email" via "value" og opdateres ved ændringer. */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {/* Inputfelt til adgangskode. Brugerværdi er bundet til "password" via "value" og opdateres ved ændringer. */}
        <TextInput
          style={styles.input}
          placeholder="Adgangskode"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry // Skjul adgangskoden med stjerner.
        />
        {/* "Log ind" knap udløser "handleLogin" funktionen ved tryk. */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log ind</Text>
        </TouchableOpacity>
        {/* Tekst, der opfordrer brugere til at tilmelde sig, hvis de ikke har en konto. */}
        <Text style={styles.signupText}>Har du ingen bruger?</Text>
        {/* "Tilmeld dig her" knap, der udløser "handleSignUp" funktionen ved tryk. */}
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
