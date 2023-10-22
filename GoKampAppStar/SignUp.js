import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  // State til at opbevare brugerens email og adgangskode.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Funktion til at håndtere tilmelding.
  const handleSignUp = async () => {
    // Tjek om både email og adgangskode er udfyldt, og vis en fejlbesked hvis ikke.
    if (!email || !password) {
      alert('Både email og adgangskode er påkrævet.');
      return;
    }

    // Hvis både email og adgangskode er angivet, fortsæt med tilmeldingen.
    // Gem brugeroplysninger i AsyncStorage som JSON.
    const user = { email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));

    // Naviger til Log Ind-skærmen.
    navigation.navigate('Login');
  };

  // Funktion til at håndtere log ind.
  const handleLogin = async () => {

    // Naviger tilbage til Tilmeld Dig-skærmen 
    navigation.navigate('Login');
  };

  return (
    // Brug et baggrundsbillede til hele skærmen.
    <ImageBackground source={require('./assets/boldmørk.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Tilmeld Dig</Text>
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
          secureTextEntry // Skjul adgangskoden med stjerner
        />
        {/* "Tilmeld" knap udløser "handleSignUp" funktionen ved tryk. */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Tilmeld</Text>
        </TouchableOpacity>
        {/* Tekst, der opfordrer brugere til at logge ind, hvis de allerede har en konto. */}
        <Text style={styles.loginText}>Allerede på Go' Kamp?</Text>
        {/* "Log Ind" knap, der udløser "handleLogin" funktionen ved tryk. */}
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginButton}>Log Ind</Text>
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
