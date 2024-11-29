export interface MovieProps {
    Title?: string;
    Year?: string;
    imdbID?: string;
  }
  
  export interface MovieContextType {
    searchTerm?: string;
    setSearchTerm?: (term: string) => void;
    movies?: Movie[];
    loading?: boolean;
    apiKey?: string | number;
    apiUrl?: string;
    fetchMovies?: (query: string) => Promise<void>;
  }
  
  export interface MovieInterface {
    children?: React.ReactNode;
  }