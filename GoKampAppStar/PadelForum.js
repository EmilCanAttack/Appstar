import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';

const klubberData = [
  {
    id: 1,
    klubnavn: "Mikkel Kristensen",
    status: "Vi søger en partner til vores padel double-turnering KBH. Er der nogen, der har lyst? 💪🎾",
    likes: 5,
    comments: [
      { id: 1, text: "Jeg vil gerne være din double-makker!", user: "Johan Mellerup" },
      { id: 2, text: "Hvilket niveau spiller I på?", user: "Dina Slava" },
    ],
  },
  {
    id: 2,
    klubnavn: "Søren Puk",
    status: "Gratis padel træning hver torsdag kl. 18:00 hos TIK padelCenter. Alle niveauer er velkomne! 🏓",
    likes: 10,
    comments: [
      { id: 3, text: "Kan jeg deltage som nybegynder?", user: "Peter Alstrøm" },
      { id: 4, text: "Hej Peter. Ja, det er faktisk tiltænkt nybegynder!", user: "Søren Puk" },
    ],
  },
  {
    id: 3,
    klubnavn: "Lars",
    status: "Nogen som står med et bat i overskud som de ikke bruger længere? 🙏",
    likes: 2,
    comments: [
        { id: 5, text: "Du kan få mit, har du et nummer jeg kan ringe på?", user: "Mikkel Pedersen" },
    ],
  },
  {
    id: 4,
    klubnavn: "Søren Puk",
    status: "TIK padel Center søger erfarne padelspillere til at træne vores ungdomstalenter. Kom og vær en del af udviklingen! 🌟",
    likes: 7,
    comments: [],
  },
  // Tilføj flere klubber og deres statusser efter behov
];
// Denne kode definerer Forum-komponenten, som indeholder brugergrænsefladen for et forum til klubberne. 
//Koden bruger React Hooks, herunder `useState`, til at håndtere tilstand og opdateringer. 
//Funktioner som `handleLike`, `handleComment`, og `handleCreateStatus` bruges til at behandle interaktioner 
//med klubstatusser og kommentarer. Brugeren kan oprette en ny status, "like" en status 
//og tilføje kommentarer til statusserne. Komponenten er også designet med brug af 
//forskellige UI-elementer som `TextInput`, `FlatList`, og `TouchableOpacity` 
//for en interaktiv brugeroplevelse.
const Forum = () => {
  const [klubber, setKlubber] = useState(klubberData);
  const [commentText, setCommentText] = useState("");
  const [username, setUsername] = useState("");
  const [statusText, setStatusText] = useState("");

  const handleLike = (klubId) => {
    const updatedKlubber = klubber.map((klub) => {
      if (klub.id === klubId) {
        return { ...klub, likes: klub.likes + 1 };
      }
      return klub;
    });

    setKlubber(updatedKlubber);
  };

  const handleComment = (klubId, comment) => {
    if (!username) {
      return;
    }

    const updatedKlubber = klubber.map((klub) => {
      if (klub.id === klubId) {
        const newComment = { id: klub.comments.length + 1, text: comment, user: username };
        return { ...klub, comments: [...klub.comments, newComment] };
      }
      return klub;
    });

    setKlubber(updatedKlubber);
    setCommentText("");
  };

  const handleCreateStatus = () => {
    if (!username || !statusText) {
      return;
    }

    const newStatus = {
      id: klubber.length + 1,
      klubnavn: username,
      status: statusText,
      likes: 0,
      comments: [],
    };

    setKlubber([newStatus, ...klubber]);
    setUsername("");
    setStatusText("");
  };

  return (
    <ImageBackground source={require('./assets/wfu.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Padel Forum</Text>
        <View style={styles.statusInputContainer}>
          <TextInput
            placeholder="Hvad har du på hjertet?..."
            onChangeText={(text) => setStatusText(text)}
            value={statusText}
          />
          <TextInput
            placeholder="Navn"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TouchableOpacity onPress={handleCreateStatus}>
            <Text>Opret Status</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          data={klubber}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.klubnavn}>{item.klubnavn}</Text>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.likes}>Likes: {item.likes}</Text>
              <TouchableOpacity onPress={() => handleLike(item.id)}>
                <Text>👍</Text>
              </TouchableOpacity>
              {item.comments.map((comment) => (
                <View key={comment.id} style={styles.commentContainer}>
                  <Text style={styles.commentText}>{comment.user}: {comment.text}</Text>
                </View>
              ))}
              <View style={styles.commentInputContainer}>
                <TextInput
                  placeholder="Skriv en kommentar..."
                  onChangeText={(text) => setCommentText(text)}
                  value={commentText}
                />
                <TextInput
                  placeholder="Dit brugernavn"
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
                <TouchableOpacity
                  onPress={() => handleComment(item.id, commentText)}
                >
                  <Text>Send</Text>
                </TouchableOpacity>
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
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  klubnavn: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
  },
  likes: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  commentText: {
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statusInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Forum;
