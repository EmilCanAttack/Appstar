// LedigeKampe.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const data = [
  {
    id: 1,
    logo: require('./assets/stadium.jpeg'), // Erstat med stien til holdets logo
    klubnavn: "Taastrup Idrætsforening",
    tomtekst: "",
    dato: '2023-11-15',
    division: 'Motionsrækken',
    antalSpillere: '8 mand',
    kontakt: "Emil Can Atan, (+45) 83 91 03 45",
    adresse: "Gadehavegårdsvej 1, 2630 Taastrup"
  },
  {
    id: 2,
    logo: require('./assets/stadium.jpeg'), // Erstat med stien til holdets logo
    dato: '15/11 19:00',
    division: 'Division 4',
    antalSpillere: '11 mand',
    kontakt: "Lars Dahl, (+45) 23 56 43 12",
    klubnavn: "Albertslund Idrætsforening",
    tomtekst: "",
    adresse: "Skallerne 14, 2620 Albertslund"
  },
  // Tilføj flere hold efter behov
];

const LedigeKampe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ledige Kampe</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.logo} style={styles.logo} />
            <Text>{item.klubnavn}</Text>
            <Text> {item.tomtekst}</Text>
            <Text>Vil gerne spille: {item.dato}</Text>
            <Text>Division: {item.division}</Text>
            <Text>Antal mand: {item.antalSpillere}</Text>
            <Text>Adresse: {item.adresse}</Text>
            <Text>Kontakt: {item.kontakt}</Text>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default LedigeKampe;
