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

  const handleForum = async () => {
    // Tilføj logik til at logge ud her, f.eks. rydning af AsyncStorage-data

    // Naviger tilbage til SignUp-skærmen (eller en anden skærm efter din logik)
    navigation.navigate('Forum');
  };

  return (
    <ImageBackground
      source={require('./assets/stadium.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Homepage</Text>
        <Button title="Ledige Kampe" onPress={() => navigation.navigate('LedigeKampe')} />
        <Button title="Forum" onPress={() => navigation.navigate('Forum')} />
        <Button title="Log Out" onPress={handleLogout} />
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
