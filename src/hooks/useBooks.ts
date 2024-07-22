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
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        return response.json();
      })
      .then(data => setBooks(data))
      .catch(error => addToast(`Error fetching books: ${error.message}`));
  }, [addToast]);

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
      if (!book.title || !book.author) {
        addToast('Book title and author are required');
        return;
      }
      setLocalBooks(prevBooks => [...prevBooks, book]);
      addToast('Book is added');
    },
    [setLocalBooks, addToast]
  );

  // Edit an existing book in the localBooks state and show a toast notification
  const editBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, updatedBook: Book) => {
      e.stopPropagation();
      if (!updatedBook.title || !updatedBook.author) {
        addToast('Book title and author are required');
        return;
      }
      setLocalBooks(prevBooks =>
        prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book))
      );
      addToast('Book is edited');
    },
    [setLocalBooks, addToast]
  );

  // Delete a book from the localBooks state and show a toast notification
  const deleteBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      e.stopPropagation();
      setLocalBooks(prevBooks => prevBooks.filter(book => book.id !== id));
      addToast('Book is deleted');
    },
    [setLocalBooks, addToast]
  );

  // Toggle a book as favorite/unfavorite and show a toast notification
  const toggleFavorite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      e.stopPropagation();
      setFavorites(prev =>
        prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
      );
      const isFavorite = favorites.includes(id);
      addToast(isFavorite ? 'Removed from favorites' : 'Added to favorites');
    },
    [favorites, addToast]
  );

  // Return the necessary states and functions
  return { books, localBooks, favorites, toggleFavorite, addBook, editBook, deleteBook };
};

export default useBooks;
