import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

// Data til at vise ledige kampe (eksempler).
const data = [
  {
    id: 1,
    logo: require('./assets/bane1.jpeg'),
    klubnavn: 'Gadehavegård Kuntsgræs',
    tomtekst: '',
    Størrelse: '11 & 8 Mands',
    TypeGræs: 'Kunstgræs',
    adresse: 'Gadehavegårdsvej 1, 2630 Taastrup',
  },
  {
    id: 2,
    logo: require('./assets/bane2.jpeg'),
    klubnavn: 'Hvidovre IF',
    tomtekst: '',
    Størrelse: '11 Mands',
    TypeGræs: 'Alm. græs',
    adresse: 'Sollentuna Alle 1, 2650 Hvidovre',
  },
  // ... tilføj flere kampoplysninger som nødvendigt.
];

const LedigeKampe = () => {
  const [holdInfo, setHoldInfo] = useState({
    klubnavn: '',
    dato: '',
    størrelse: '',
    TypeGræs: '',
    kontakt: '',
    adresse: '',
    selectedClub: null,
  });
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Funktion til at vælge en klub for et hold.
  const handleClubSelect = (club) => {
    setHoldInfo({ ...holdInfo, selectedClub: club, logo: club.logo });
  };

  return (
    // Brug et baggrundsbillede til hele skærmen.
    <ImageBackground source={require('./assets/sortbane.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Ledige Baner</Text>

        {/* Vis en liste over ledige kampe fra dataarrayet. */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.logo} style={styles.logo} />
              <Text style={styles.text}>{item.klubnavn}</Text>
              <Text style={styles.text}>{item.tomtekst}</Text>
              <Text style={styles.text}>Adresse: {item.adresse}</Text>
              <Text style={styles.text}>Størrelse: {item.Størrelse}</Text>
              <Text style={styles.text}>Type græs: {item.TypeGræs}</Text>

              {/* "Book Now" button hardcoded med ledige times */}
              <View style={styles.bookNowButtonContainer}>
                <Text style={styles.label}>Ledige Tider:</Text>
                <View style={styles.availableTimesContainer}>
                  <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowButtonText}>17:00</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowButtonText}>19:00</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowButtonText}>19:30</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowButtonText}>21:30</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.bookNowButtonText}>22:00</Text>
                  </TouchableOpacity>
                  {/* Add more times as needed */}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Stilark for forskellige elementer i komponenten.
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Gennemsigtig hvid baggrund.
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center', // Centrer indhold vandret.
  },
  logo: {
    width: 1000,
    height: 150,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  bookNowButtonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  availableTimesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  bookNowButton: {
    backgroundColor: 'green',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
  bookNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LedigeKampe;
