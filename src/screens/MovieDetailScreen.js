// src/pages/MovieDetailScreen.js
import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet 
} from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.foto }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.sinopseLabel}>Sinopse:</Text>
        <Text style={styles.sinopse}>{movie.sinopse}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  sinopseLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 8,
  },
  sinopse: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
});

export default MovieDetailScreen;