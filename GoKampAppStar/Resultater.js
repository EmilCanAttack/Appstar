import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

const kampe = [
  {
    klub1Logo: require('./assets/banen.jpeg'),
    klub2Logo: require('./assets/banen.jpeg'),
    klub1Navn: 'Klub 1',
    klub2Navn: 'Klub 2',
    dato: '01/12/2023',
    resultat: '3 - 2',
    lokation: 'Stadion Navn 1',
  },
  {
    klub1Logo: require('./assets/banen.jpeg'),
    klub2Logo: require('./assets/banen.jpeg'),
    klub1Navn: 'Klub 3',
    klub2Navn: 'Klub 4',
    dato: '05/12/2023',
    resultat: '1 - 1',
    lokation: 'Stadion Navn 2',
  },
  // Tilføj flere kampe efter behov
];

const Resultater = () => {
  return (
    <ImageBackground
      source={require('./assets/sky.jpeg')} // Erstat med stien til dit baggrundsbillede
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {kampe.map((kamp, index) => (
          <View key={index} style={styles.kampContainer}>
            <View style={styles.klub1Container}>
              <Text style={styles.klubNavn}>{kamp.klub1Navn}</Text>
              <Image source={kamp.klub1Logo} style={styles.logo} />
            </View>
            <View style={styles.resultatContainer}>
              <Text style={styles.resultatText}>{kamp.resultat}</Text>
              <Text style={styles.lokation}>{kamp.lokation}</Text>
              <Text style={styles.dato}>{kamp.dato}</Text>
            </View>
            <View style={styles.klub2Container}>
              <Text style={styles.klubNavn}>{kamp.klub2Navn}</Text>
              <Image source={kamp.klub2Logo} style={styles.logo} />
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  kampContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
  },
  klub1Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  klub2Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  klubNavn: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  dato: {
    fontSize: 16,
    marginTop: 5,
  },
  resultatContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultatText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lokation: {
    fontSize: 16,
    marginTop: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Resultater;
