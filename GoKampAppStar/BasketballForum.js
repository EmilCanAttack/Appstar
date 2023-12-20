import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';

const klubberData = [
  {
    id: 1,
    klubnavn: "Mike Larry",
    status: "BMS er på udkig efter en erfaren point guard til den kommende sæson. Kender du nogen, der har skills og spilforståelse? Tag dem med til vores næste træning!",
    likes: 4,
    comments: [
      { id: 1, text: "Jeg vil gerne tilmelde mig som målmand!", user: "Lars" },
      { id: 2, text: "Målmand? Vi spiller basketball..", user: "Mike Larry" },
    ],
  },
  {
    id: 2,
    klubnavn: "Bo Sørensen",
    status: "Albertslund Idrætsforening holder åbent hus for talentudvælgelse på søndag kl. 14:00. Unge talenter mellem 12-18 år er velkomne. Grib chancen for at blive en del af vores talentfulde akademi!",
    likes: 10,
    comments: [
      { id: 3, text: "Var det ikke Lørdag?", user: "Peter Vermund" },
      { id: 4, text: "Hej Peter. Det er blevet rykket til på Søndag", user: "Bo Sørensen" },
    ],
  },
  {
    id: 3,
    klubnavn: "Jeremy Fale",
    status: "Vores hold søger en træningsbane i København til vores næste sæsonforberedelse. Professionelle faciliteter og plads til intens træning er afgørende. Del gerne anbefalinger!",
    likes: 2,
    comments: [
        { id: 5, text: "Har I overvejet at prøve Københavns Basketballcenter? De har før haft professionelle hold til træning.", user: "Anders Geejl" },
    ],
  },
  {
    id: 4,
    klubnavn: "Kim Slcheidt",
    status: "BK Amger søger en dedikerede trænere til at hjælpe med at udvikle næste generations basketballtalenter. Hvis du har erfaring og passion for at forme unge atleter, så kontakt os for en samtale!",
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
        <Text style={styles.title}>Basket Forum</Text>
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
