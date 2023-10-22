// Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const handleLogout = async () => {
    // Tilføj logik til at logge ud her, f.eks. rydning af AsyncStorage-data

    // Naviger tilbage til SignUp-skærmen (eller en anden skærm efter din logik)
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Welcome to the Homepage</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default Home;
