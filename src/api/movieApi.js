// src/api/movieApi.js
const API_URL = 'https://sujeitoprogramador.com/r-api/?api=filmes';

export const movieApi = {
  async getMovies() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      throw error;
    }
  }
};