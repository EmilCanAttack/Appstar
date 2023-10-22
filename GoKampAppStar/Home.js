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
    navigation.navigate('Forum');
  };

  return (
    // Brug et baggrundsbillede til hele skærmen.
    <ImageBackground
      source={require('./assets/boldlys.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Velkommen til Go' Kamp</Text>
        <View style={styles.buttonsContainer}>
          {/* Knapper til at navigere til forskellige skærme. */}
          <Button title="Ledige Kampe" onPress={() => navigation.navigate('LedigeKampe')} />
          <Button title="Forum" onPress={handleForum} />
          <Button title="Resultater" onPress={() => navigation.navigate('Resultater')} />
          <Button title="Log Ud" onPress={handleLogout} />
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
