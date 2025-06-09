// src/pages/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  Text,
  Alert 
} from 'react-native';
import MovieCard from '../components/MovieCard';
import { movieApi } from '../api/movieApi';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await movieApi.getMovies();
      setMovies(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os filmes. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetail', { movie });
  };

  const renderMovieItem = ({ item }) => (
    <MovieCard 
      movie={item} 
      onPress={() => handleMoviePress(item)} 
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Carregando filmes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default HomeScreen;