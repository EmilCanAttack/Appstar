import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
//Masser af hardcoding for at demonstrere et eksempel
const kampe = [
  {
    klub1Logo: require('./assets/kanin.png'),
    klub2Logo: require('./assets/bms.png'),
    klub1Navn: 'SBR',
    klub2Navn: 'BMS',
    dato: '18/11/2023',
    resultat: '125 - 110',
    lokation: 'Herlev Basket',
  },
  {
    klub1Logo: require('./assets/værløse.png'),
    klub2Logo: require('./assets/a.png'),
    klub1Navn: 'VBH',
    klub2Navn: 'BKA',
    dato: '18/11/2023',
    resultat: '100 - 93',
    lokation: 'Amager Arena',
  },
  {
    klub1Logo: require('./assets/BB.png'),
    klub2Logo: require('./assets/bms.png'),
    klub1Navn: 'TIF',
    klub2Navn: 'HIF',
    dato: '11/11/2023',
    resultat: '88 - 107',
    lokation: 'Herlev Basket',
  },
  {
    klub1Logo: require('./assets/ja.png'),
    klub2Logo: require('./assets/kanin.png'),
    klub1Navn: 'FCN',
    klub2Navn: 'FCK',
    dato: '07/11/2023',
    resultat: '129 - 115',
    lokation: 'Randers Idrætsanlæg',
  },
 
];

const Resultater = () => {
  return (
    <ImageBackground
      source={require('./assets/basketwall.jpeg')} 
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
