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
      source={require('./assets/boldlys.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
        <Text style={styles.title}>Welcome to the Homepage</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Ledige Kampe" onPress={() => navigation.navigate('LedigeKampe')} />
          <Button title="Forum" onPress={() => navigation.navigate('Forum')} />
          <Button title="Resultater" onPress={() => navigation.navigate('Resultater')} />
          <Button title="Log Out" onPress={handleLogout} />
        </View>
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
    justifyContent: 'flex-start', // Ændret til 'flex-start' for at placere indholdet øverst
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 20, // Tilføjet en øverste polstring
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  buttonsContainer: {
    marginTop: 20, // Tilføjet øverste margen for at adskille knapperne fra overskriften
  },
});

export default Home;
