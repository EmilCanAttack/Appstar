// Home.js
import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const handleLogout = async () => {
    // Tilføj logik til at logge ud her, f.eks. rydning af AsyncStorage-data

    // Naviger tilbage til SignUp-skærmen (eller en anden skærm efter din logik)
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./assets/stadium.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Homepage</Text>
        <Button title="Log Out" onPress={handleLogout} />
        <Button title="Ledige Kampe" onPress={() => navigation.navigate('LedigeKampe')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
});

export default Home;
