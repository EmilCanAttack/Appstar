import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';

const data = [
  {
    id: 1,
    logo: require('./assets/bane1.jpeg'),
    klubnavn: 'Gadehavegård Kuntsgræs',
    tomtekst: '',
    Størrelse: '11 & 8 Mands',
    TypeGræs: 'Kunstgræs',
    adresse: 'Gadehavegårdsvej 1, 2630 Taastrup',
    reservedSlots: [],
  },
  {
    id: 2,
    logo: require('./assets/bane2.jpeg'),
    klubnavn: 'Hvidovre IF',
    tomtekst: '',
    Størrelse: '11 Mands',
    TypeGræs: 'Alm. græs',
    adresse: 'Sollentuna Alle 1, 2650 Hvidovre',
    reservedSlots: [],
  },
  // Add more data as needed.
];

const timeSlots = ['17:00', '19:00', '19:30', '21:30', '22:00'];

const LedigeKampe = () => {
  const [reservedTimeSlots, setReservedTimeSlots] = useState([]);

  const handleTimeSlotPress = (item, time) => {
    if (reservedTimeSlots.includes(`${item.id}-${time}`)) {
      Alert.alert('Fejl', 'Denne tid er allerede reserveret.');
    } else {
      Alert.alert('Success', 'Reservationen lykkedes!');
      setReservedTimeSlots([...reservedTimeSlots, `${item.id}-${time}`]);
    }
  };

  return (
    <ImageBackground source={require('./assets/sortbane.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Ledige Baner</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.logo} style={styles.logo} />
              <Text style={styles.text}>{item.klubnavn}</Text>
              <Text style={styles.text}>{item.tomtekst}</Text>
              <Text style={styles.text}>Størrelse: {item.Størrelse}</Text>
              <Text style={styles.text}>Type græs: {item.TypeGræs}</Text>
              <Text style={styles.text}>Adresse: {item.adresse}</Text>

              <View style={styles.bookNowButtonContainer}>
                <Text style={styles.label}>Ledige Tider:</Text>
                <View style={styles.availableTimesContainer}>
                  {timeSlots.map((time) => (
                    <TouchableOpacity
                      key={time}
                      style={[
                        styles.bookNowButton,
                        reservedTimeSlots.includes(`${item.id}-${time}`) && { backgroundColor: 'grey' },
                      ]}
                      onPress={() => handleTimeSlotPress(item, time)}
                    >
                      <Text style={styles.bookNowButtonText}>{time}</Text>
                    </TouchableOpacity>
                  ))}
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
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
