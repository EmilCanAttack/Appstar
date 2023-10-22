import React, { useState } from 'react';
import { View, Text, Image, FlatList, Modal, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  // Tidligere data her...
];

const sjællandClubs = [
  { name: 'Klub 1', logo: require('./assets/stadium.jpeg') },
  { name: 'Klub 2', logo: require('./assets/stadium.jpeg') },
  { name: 'Hvidovre', logo: require('./assets/banen.jpeg') },
  { name: 'Klub 4', logo: require('./assets/stadium.jpeg') },
  { name: 'Klub 5', logo: require('./assets/stadium.jpeg') },
  // Tilføj flere klubber og deres logoer på Sjælland efter behov
];

const jyllandClubs = [
  { name: 'Klub A', logo: require('./assets/stadium.jpeg') },
  { name: 'Klub B', logo: require('./assets/stadium.jpeg') },
  { name: 'Klub C', logo: require('./assets/stadium.jpeg') },
  { name: 'Klub D', logo: require('./assets/stadium.jpeg') },
  { name: 'Klub E', logo: require('./assets/stadium.jpeg') },
  // Tilføj de 5 største klubber i Jylland
];

const LedigeKampe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [holdInfo, setHoldInfo] = useState({
    klubnavn: "",
    dato: "",
    division: "",
    antalSpillere: "",
    kontakt: "",
    adresse: "",
    selectedClub: null,
  });
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleClubSelect = (club) => {
    setHoldInfo({ ...holdInfo, selectedClub: club });
  };

  const handleSubmit = () => {
    // Gem holdInfo i dataarrayet eller send det til en server (afhængigt af din backend-logik)
    const id = data.length + 1; // Generer en unik ID (du kan bruge en bedre metode)
    data.push({ id, ...holdInfo });
    setHoldInfo({
      klubnavn: "",
      dato: "",
      division: "",
      antalSpillere: "",
      kontakt: "",
      adresse: "",
      selectedClub: null,
    });
    setSelectedRegion(null);
    setModalVisible(false); // Luk modalen efter indsendelse
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ledige Kampe</Text>
      <Button title="Tilmeld Hold" onPress={() => setModalVisible(true)} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.selectedClub ? item.selectedClub.logo : require('./assets/stadium.jpeg')} style={styles.logo} />
            <Text>{item.klubnavn}</Text>
            <Text>{item.tomtekst}</Text>
            <Text>Vil gerne spille d. {item.dato} </Text>
            <Text>Division: {item.division}</Text>
            <Text>Antal mand: {item.antalSpillere}</Text>
            <Text>Adresse: {item.adresse}</Text>
            <Text>Kontakt: {item.kontakt}</Text>
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
            <Text style={styles.label}>Vælg Region:</Text>
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
                      <Text>{item.name}</Text>
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
});

export default LedigeKampe;
