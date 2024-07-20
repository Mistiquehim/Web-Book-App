import { useState, useEffect, useCallback } from 'react';
import { Book } from '../types/book';

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [localBooks, setLocalBooks] = useState<Book[]>(() => {
    const storedLocalBooks = localStorage.getItem('localBooks');
    return storedLocalBooks ? JSON.parse(storedLocalBooks) : [];
  });
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/cutamar/mock/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('localBooks', JSON.stringify(localBooks));
  }, [localBooks]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addBook = useCallback(
    (book: Book) => {
      setLocalBooks(prevBooks => [...prevBooks, book]);
    },
    [setLocalBooks]
  );

  const editBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, updatedBook: Book) => {
      e.stopPropagation();
      setLocalBooks(prevBooks =>
        prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book))
      );
    },
    [setLocalBooks]
  );

  const deleteBook = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      e.stopPropagation();
      setLocalBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    },
    [setLocalBooks]
  );

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return { books, localBooks, favorites, toggleFavorite, addBook, editBook, deleteBook };
};

export default useBooks;
