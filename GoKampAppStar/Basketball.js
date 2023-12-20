import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  // Funktion til at håndtere log ud.
  const handleLogout = async () => {

    // Naviger tilbage til Login-skærmen 
    navigation.navigate('Login');
  };

  // Funktion til at navigere til Forum-skærmen.
  const handleForum = () => {
    // Tilføj logik til at navigere til Forum-skærmen her.

    // Naviger til Forum-skærmen 
    navigation.navigate('BasketballForum');
  };

  return (
    // Brug et baggrundsbillede til hele skærmen.
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
      <Text style={styles.title}></Text>
        <Text style={styles.title}>BASKETBALL</Text>
        <View style={styles.buttonsContainer}>
          {/* Knapper til at navigere til forskellige skærme. */}
          <Button title="Ledige Kampe" onPress={() => navigation.navigate('BasketballLedigeKampe')} color="green" />
          <Button title="Ledige Baner" onPress={() => navigation.navigate('BasketballLedigeBaner')} color="green" />
          <Button title="Forum" onPress={handleForum} color="green" />
          <Button title="Resultater" onPress={() => navigation.navigate('BasketballResultater')} color="green" />
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
    justifyContent: 'flex-start', // Ændret til 'flex-start' for at placere indholdet øverst.
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 20, // Tilføjet øverste polstring.
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  buttonsContainer: {
    marginTop: 20, // Tilføjet øverste margen for at adskille knapperne fra overskriften.
  },
});

export default Home;
