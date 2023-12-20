import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

// Data til at vise ledige kampe (eksempler).
const data = [
  {
    id: 1,
    logo: require('./assets/topaddel.jpeg'),
    NavnOgPoint: 'Gitte (500 Women Over 35) \n  Mads (900 Men Over 35) ',
    tomtekst: '',
    dato: '23/12 Kl. 19:30',
    TypeKamp: '2 mod 2',
    hjemmebane: 'Racket Club - Kløver',
    kontakt: 'Mads Elholm, Nr. 29 91 12 45',
    adresse: 'Raffinaderivej 10E, 2300 København',
  },
  {
    id: 2,
    logo: require('./assets/girlpaddel1.jpeg'),
    NavnOgPoint: 'Katja (940 Women-Main)',
    tomtekst: '',
    dato: '22/12 Kl. 12:30',
    TypeKamp: '1 mod 1',
    hjemmebane: 'PadelPadel Odense',
    kontakt: 'Mads Elholm, Nr. 29 91 12 45',
    adresse: 'Tietgens Blvd. 24K, 5220 Odense',
  },
  // ... tilføj flere kampoplysninger som nødvendigt.
];

// Logoer og navne på klubber i Sjælland og Jylland (eksempler).
const sjællandClubs = [
  {logo: require('./assets/emilsexy.jpeg') },
  {logo: require('./assets/emilosboat.jpeg') },
];


const LedigeKampe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [holdInfo, setHoldInfo] = useState({
    NavnOgPoint: '',
    dato: '',
    hjemmebane: '',
    TypeKamp: '',
    kontakt: '',
    adresse: '',
    selectedClub: null,
  });
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Funktion til at vælge en klub for et hold.
  const handleClubSelect = (club) => {
    setHoldInfo({ ...holdInfo, selectedClub: club, logo: club.logo });
  };

  // Funktion til at behandle indsendelse af holdoplysninger.
  const handleSubmit = () => {
    // Gem holdInfo i dataarrayet 
    const id = data.length + 1; // Generer en unik ID 
    data.push({ id, ...holdInfo });
    // Nulstil holdoplysningerne.
    setHoldInfo({
      NavnOgPoint: '',
      dato: '',
      hjemmebane: '',
      TypeKamp: '',
      kontakt: '',
      adresse: '',
      selectedClub: null,
      logo: null, // Nulstil logo.
    });
    setSelectedRegion(null);
    setModalVisible(false); // Luk modalen efter indsendelse.
  };

  return (
    // Brug et baggrundsbillede til hele skærmen.
    <ImageBackground source={require('./assets/paddel.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Ledige Kampe</Text>
        <Button title="Tilmeld Hold" onPress={() => setModalVisible(true)} color="green" />

        {/* Vis en liste over ledige kampe fra dataarrayet. */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.logo} style={styles.logo} />
              <Text style={styles.text}>{item.NavnOgPoint}</Text>
              <Text style={styles.text}>{item.tomtekst}</Text>
              <Text style={styles.text}>Type Kamp: {item.TypeKamp}</Text>
              <Text style={styles.text}>Vil gerne spille d. {item.dato} </Text>
              <Text style={styles.text}>Hjemmebane: {item.hjemmebane}</Text>
              <Text style={styles.text}>Adresse: {item.adresse}</Text>
              <Text style={styles.text}>Kontakt: {item.kontakt}</Text>
            </View>
          )}
        />

        {/* Modal til at indsende holdoplysninger. */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Tilmeld Hold </Text>

              {/* Inputfelter til at indtaste holdoplysninger. */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Navn og Point:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast NavnOgPoint"
                  value={holdInfo.NavnOgPoint}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, NavnOgPoint: text })}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Dato:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast dato"
                  value={holdInfo.dato}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, dato: text })}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Hjemmebane:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast hjemmebane"
                  value={holdInfo.hjemmebane}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, hjemmebane: text })}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Type Kamp:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast type kamp"
                  value={holdInfo.TypeKamp}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, TypeKamp: text })}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Kontakt:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast kontaktinformation"
                  value={holdInfo.kontakt}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, kontakt: text })}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Adresse:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast adresse"
                  value={holdInfo.adresse}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, adresse: text })}
                />
              </View>

              <Text style={styles.label}>Vælg dine fotos:</Text>
              <Button title="Vælg dine fotos" onPress={() => setSelectedRegion(sjællandClubs)} />
              {selectedRegion && (
/* `<FlatList>`-komponenten bruges til at gengive en liste over elementer i en dejlig rulbar visning.
                I dette tilfælde bruges den til at gengive en liste over klubber i den valgte region. */
                <FlatList
                  data={selectedRegion}
                  keyExtractor={(item) => item.name}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleClubSelect(item)}>
                      <View style={styles.cityOption}>
                        <Image source={item.logo} style={styles.cityLogo} />
                        <Text style={styles.text}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
              <Button title="Tilmeld" onPress={handleSubmit} />
              <Button title="Annuller" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
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
    width: 150,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  cityOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
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
});

export default LedigeKampe;