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
    logo: require('./assets/bms.png'),
    klubnavn: 'BMS Herlev',
    tomtekst: '',
    dato: '23/12 Kl. 19:00',
    division: '1.',
    Hjemmebane: 'Herlev Basket',
    kontakt: 'Moe Lester, Nr. 20 45 03 29',
    adresse: 'Ejbyvej 47, 2740 Skovlunde',
  },
  {
    id: 2,
    logo: require('./assets/værløse.png'),
    klubnavn: 'Værløse Blue Hawks',
    tomtekst: '',
    dato: '30/12 Kl. 18:00',
    division: '1.',
    Hjemmebane: 'Værløse Basketball Klub',
    kontakt: 'Nick Gerr, Nr. 39 91 47 45',
    adresse: 'Kirke Værløsevej 58',
  },
  // ... tilføj flere kampoplysninger som nødvendigt.
];

// Logoer og navne på klubber i Sjælland og Jylland (eksempler).
const sjællandClubs = [
  { name: 'Bakken Bears', logo: require('./assets/BB.png') },
  { name: 'Randers Cimbria', logo: require('./assets/ja.png') },
  { name: 'BMS Herlev', logo: require('./assets/bms.png') },
  { name: 'Svendborg Rabbits', logo: require('./assets/kanin.png') },
  { name: 'Væreløse Blue Hawks', logo: require('./assets/værløse.png') },
];


const LedigeKampe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [holdInfo, setHoldInfo] = useState({
    klubnavn: '',
    dato: '',
    division: '',
    Hjemmebane: '',
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
      klubnavn: '',
      dato: '',
      division: '',
      Hjemmebane: '',
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
    <ImageBackground source={require('./assets/basketwall.jpeg')} style={styles.backgroundImage}>
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
              <Text style={styles.text}>{item.klubnavn}</Text>
              <Text style={styles.text}>{item.tomtekst}</Text>
              <Text style={styles.text}>Vil gerne spille d. {item.dato} </Text>
              <Text style={styles.text}>Division: {item.division}</Text>
              <Text style={styles.text}>Hjemmebane: {item.Hjemmebane}</Text>
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
                <Text style={styles.label}>Hjemmebane:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Indtast Hjemmebane"
                  value={holdInfo.Hjemmebane}
                  onChangeText={(text) => setHoldInfo({ ...holdInfo, Hjemmebane: text })}
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
              <Button title="Div 1." onPress={() => setSelectedRegion(sjællandClubs)} />
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