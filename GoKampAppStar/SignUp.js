import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Gem brugeroplysninger i AsyncStorage som JSON
    const user = { email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));

    // Naviger til Login-skærmen
    navigation.navigate('Login');
  };
  const handleLogin = async () => {
    // Tilføj logik til at logge ud her, f.eks. rydning af AsyncStorage-data

    // Naviger tilbage til SignUp-skærmen (eller en anden skærm efter din logik)
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Sign Up</Text>
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text></Text>
      <Text>Er du allerede på Go' Kamp?</Text>
      <Button title="Log Ind" onPress={handleLogin} />
    </View>
  );
};

export default SignUp;
