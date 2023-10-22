import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';

// Data for klubber og deres statusser.
const klubberData = [
  {
    id: 1,
    klubnavn: "Taastrup Idrætsforening",
    status: "Vi søger en målmand til vores 11-mands hold. Kontakt os, hvis du er interesseret!",
    likes: 5,
    comments: [
      { id: 1, text: "Jeg vil gerne tilmelde mig som målmand!", user: "John" },
      { id: 2, text: "Hvad er der sket med jeres tideligere målmand?", user: "Zaid" },
    ],
  },
  // ... Tilføj flere klubber og statusser efter behov.
];

const Forum = () => {
  // Tilstande til at administrere data og inputfelter.
  const [klubber, setKlubber] = useState(klubberData);
  const [commentText, setCommentText] = useState("");
  const [username, setUsername] = useState("");
  const [statusText, setStatusText] = useState("");

  // Funktion til at håndtere "Like" på en klub-status.
  const handleLike = (klubId) => {
    const updatedKlubber = klubber.map((klub) => {
      if (klub.id === klubId) {
        return { ...klub, likes: klub.likes + 1 };
      }
      return klub;
    });

    setKlubber(updatedKlubber);
  };

  // Funktion til at håndtere at tilføje en kommentar til en klub-status.
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

  // Funktion til at oprette en ny klub-status.
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
    // Brug et baggrundsbillede til hele skærmen.
    <ImageBackground source={require('./assets/wfu.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Klubbernes Forum</Text>
        <View style={styles.statusInputContainer}>
          {/* Inputfelt til statusbeskeder. */}
          <TextInput
            placeholder="Hvad har du på hjertet?..."
            onChangeText={(text) => setStatusText(text)}
            value={statusText}
          />
          {/* Inputfelt til brugernavn. */}
          <TextInput
            placeholder="Navn"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          {/* Knap til at oprette en ny status. */}
          <TouchableOpacity onPress={handleCreateStatus}>
            <Text>Opret Status</Text>
          </TouchableOpacity>
        </View>
        {/* Liste af klub-statusser med "Like" og kommentarer. */}
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
                  {/* Kommentarer til klub-statussen. */}
                  <Text style={styles.commentText}>{comment.user}: {comment.text}</Text>
                </View>
              ))}
              <View style={styles.commentInputContainer}>
                {/* Inputfelt til at tilføje en kommentar. */}
                <TextInput
                  placeholder="Skriv en kommentar..."
                  onChangeText={(text) => setCommentText(text)}
                  value={commentText}
                />
                {/* Inputfelt til brugernavn. */}
                <TextInput
                  placeholder="Dit brugernavn"
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
                {/* Knap til at sende en kommentar. */}
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
  // Stilark for forskellige elementer i komponenten.
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
