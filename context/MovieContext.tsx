import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { MovieContextType, MovieInterface, MovieProps } from './context';

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider =  ({ children }: MovieInterface) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_OMDB_API;

    const fetchMovies = async (query: string) => {
        
        const encodedSearch = encodeURIComponent(query.trim());
        const url = `${apiUrl}/?s=${encodedSearch}&apiKey=${apiKey}`;
       
        if (!query) {
          setMovies([]);
          return;
        }
    
        setLoading(true);
        try {
          const response = await axios.get(url!);
    
          if (response.data.Response === 'True') {
            setMovies(response.data.Search);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error('Error searching for movies:', error);
          setMovies([]);
        } finally {
          setLoading(false);
        }
      };

      return (
        <MovieContext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            movies,
            loading,
            apiKey,
            apiUrl,
            fetchMovies,
          }}
        >
          {children}
        </MovieContext.Provider>
      );
    };

    export const useMovieContext = (): MovieContextType => {
        const context = useContext(MovieContext);
        if (!context) {
          throw new Error('useMovieContext must be used within a MovieProvider');
        }
        return context;
      };