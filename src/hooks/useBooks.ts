import { useState, useEffect, useCallback } from 'react'; 
import { Book } from '../types/book';
import { useToast } from '../components/common/Toast/ToastManager';

// Custom hook for managing books and their states
const useBooks = () => {

  // Extract the addToast function from the custom toast hook
  const { addToast } = useToast();

  // State for storing books fetched from the API
  const [books, setBooks] = useState<Book[]>([]);

  // State for storing locally added/edited books from local storage
  const [localBooks, setLocalBooks] = useState<Book[]>(() => {
    const storedLocalBooks = localStorage.getItem('localBooks');
    return storedLocalBooks ? JSON.parse(storedLocalBooks) : [];
  });
  
  // State for storing favorite books IDs from local storage
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Fetch books from the API on component mount
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/cutamar/mock/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  // Update local storage whenever localBooks state changes
  useEffect(() => {
    localStorage.setItem('localBooks', JSON.stringify(localBooks));
  }, [localBooks]);

  // Update local storage whenever favorites state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add a new book to the localBooks state and show a toast notification
  const addBook = useCallback(
    (book: Book) => {
      setLocalBooks(prevBooks => [...prevBooks, book]);
      const message = 'Book is added';
      addToast(message);
    },
    [setLocalBooks, addToast]
  );

  // Edit an existing book in the localBooks state and show a toast notification
  const editBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, updatedBook: Book) => {
      e.stopPropagation();
      setLocalBooks(prevBooks =>
        prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book))
      );
      const message = 'Book is edited';
      addToast(message);
    },
    [setLocalBooks, addToast]
  );

  // Delete a book from the localBooks state and show a toast notification
  const deleteBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      e.stopPropagation();
      setLocalBooks(prevBooks => prevBooks.filter(book => book.id !== id));
      const message = 'Book is deleted';
      addToast(message);
    },
    [setLocalBooks, addToast]
  );

  // Toggle a book as favorite/unfavorite and show a toast notification
  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
    const isFavorite = favorites.includes(id);
    const message = isFavorite ? 'Removed from favorites' : 'Added to favorites';
    addToast(message);
  };

  // Return the necessary states and functions
  return { books, localBooks, favorites, toggleFavorite, addBook, editBook, deleteBook };
};

export default useBooks;
