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

const data = [
  {
    id: 1,
    logo: require('./assets/tif.png'),
    klubnavn: 'Taastrup Idrætsforening',
    tomtekst: '',
    dato: '15/11 Kl. 19:30',
    division: 'Motionsrækken',
    antalSpillere: '8 mand',
    kontakt: 'Emil Can Atan, Nr. 83 91 03 45',
    adresse: 'Gadehavegårdsvej 1, 2630 Taastrup',
  },
  {
    id: 2,
    logo: require('./assets/fhf.png'),
    dato: '17/11 Kl. 19:00',
    division: 'Division 4',
    antalSpillere: '11 mand',
    kontakt: 'Lars Dahl, Nr. 23 56 43 12',
    klubnavn: 'Fløng-Hedehusene Fodbold',
    tomtekst: '',
    adresse: 'Stenbuen 34, 2640 Hedehusene',
  },
];

const sjællandClubs = [
  { name: 'Hvidovre IF.', logo: require('./assets/hif.png') },
  { name: 'Brøndby IF.', logo: require('./assets/bif.png') },
  { name: 'FC. København', logo: require('./assets/fck.png') },
  { name: 'Fløng-Hedehusene Fodbold', logo: require('./assets/fhf.png') },
  { name: 'Taastrup IF.', logo: require('./assets/tif.png') },
  // Tilføj flere klubber og deres logoer på Sjælland efter behov
];

const jyllandClubs = [
  { name: 'FC. Midtjylland ', logo: require('./assets/fcm.png') },
  { name: 'Randers FC.', logo: require('./assets/rfc.png') },
  { name: 'Aalborg BK', logo: require('./assets/aab.png') },
  { name: 'FC. Nordsjælland', logo: require('./assets/fcn.png') },
  { name: 'Aarhus GF.', logo: require('./assets/agf.png') },
  // Tilføj de 5 største klubber i Jylland
];

const LedigeKampe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [holdInfo, setHoldInfo] = useState({
    klubnavn: '',
    dato: '',
    division: '',
    antalSpillere: '',
    kontakt: '',
    adresse: '',
    selectedClub: null,
  });
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleClubSelect = (club) => {
    setHoldInfo({ ...holdInfo, selectedClub: club, logo: club.logo }); // Gem også klublogoet i holdInfo
  };

  const handleSubmit = () => {
    // Gem holdInfo i dataarrayet eller send det til en server (afhængigt af din backend-logik)
    const id = data.length + 1; // Generer en unik ID (du kan bruge en bedre metode)
    data.push({ id, ...holdInfo });
    setHoldInfo({
      klubnavn: '',
      dato: '',
      division: '',
      antalSpillere: '',
      kontakt: '',
      adresse: '',
      selectedClub: null,
      logo: null, // Nulstil logo
    });
    setSelectedRegion(null);
    setModalVisible(false); // Luk modalen efter indsendelse
  };

  return (
    <ImageBackground source={require('./assets/sortbane.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Ledige Kampe</Text>
        <Button title="Tilmeld Hold" onPress={() => setModalVisible(true)} />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.logo} style={styles.logo} />
              <Text style={styles.text}>{item.klubnavn}</Text>
              <Text style={styles.text}>{item.tomtekst}</Text>
              <Text style={styles.text}>Vil gerne spille d. {item.dato} </Text>
              <Text style={styles.text}>Division: {item.division}</Text>
              <Text style={styles.text}>Antal mand: {item.antalSpillere}</Text>
              <Text style={styles.text}>Adresse: {item.adresse}</Text>
              <Text style={styles.text}>Kontakt: {item.kontakt}</Text>
            </View>
          )}
        />
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Tilmeld Hold</Text>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Klubnavn:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast klubnavn"
                  value={holdInfo.klubnavn}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, klubnavn: text })}
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
                <Text style={styles.label}>Division:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast division"
                  value={holdInfo.division}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, division: text })}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Antal Spillere:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast antal spillere"
                  value={holdInfo.antalSpillere}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, antalSpillere: text })}
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
              <Text style={styles.label}>Vælg klubbens logo:</Text>
              <Button title="Sjælland" onPress={() => setSelectedRegion(sjællandClubs)} />
              <Button title="Jylland" onPress={() => setSelectedRegion(jyllandClubs)} />
              {selectedRegion && (
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Gennemsigtig hvid baggrund
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center', // Centrer indhold vandret
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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
