import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const klubberData = [
  {
    id: 1,
    klubnavn: "Taastrup Idrætsforening",
    status: "Vi søger en målmand til vores 11-mands hold. Kontakt os, hvis du er interesseret!",
    likes: 5,
    comments: [
      { id: 1, text: "Jeg vil gerne tilmelde mig som målmand!", user: "John" },
      { id: 2, text: "Hvornår er jeres næste træning?", user: "Anna" },
    ],
  },
  {
    id: 2,
    klubnavn: "Albertslund Idrætsforening",
    status: "Vi træner hver torsdag kl. 18:00. Kom og vær med!",
    likes: 10,
    comments: [
      { id: 3, text: "Kan jeg deltage som nybegynder?", user: "Peter" },
    ],
  },
  {
    id: 3,
    klubnavn: "Klub 1",
    status: "Vi har brug for flere spillere til vores 8-mands hold. Tilmeld dig nu!",
    likes: 2,
    comments: [],
  },
  {
    id: 4,
    klubnavn: "Klub A",
    status: "Vi søger frivillige trænere til vores ungdomshold. Kom og hjælp med at udvikle vores talenter!",
    likes: 7,
    comments: [],
  },
  // Tilføj flere klubber og deres statusser efter behov
];

const Forum = () => {
  const [klubber, setKlubber] = useState(klubberData);
  const [commentText, setCommentText] = useState("");
  const [username, setUsername] = useState(""); // Tilføj en state til at opbevare brugernavnet
  const [statusText, setStatusText] = useState(""); // Tilføj en state til at opbevare brugernes egne opslag

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
      // Vis en fejlbesked eller bloker handlingen, hvis brugernavnet ikke er angivet
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
      // Vis en fejlbesked eller bloker handlingen, hvis brugernavn eller status ikke er angivet
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
    <View style={styles.container}>
      <Text style={styles.title}>Klubbernes Forum</Text>
      <View style={styles.statusInputContainer}>
        <TextInput
          placeholder="Skriv din status..."
          onChangeText={(text) => setStatusText(text)}
          value={statusText}
        />
        <TextInput
          placeholder="Dit brugernavn"
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
              <Text>Like</Text>
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
});

export default Forum;
