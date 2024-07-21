import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import { Book } from '../types/book';
import Header from '../components/common/Header';

const BookListPage = () => {
  const { books, localBooks, favorites, toggleFavorite, deleteBook } = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const booksPerPage = 5;
  const totalBooks = [...books, ...localBooks];
  const totalPages = Math.ceil(totalBooks.length / booksPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedBooks = totalBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handleBookClick = (book: Book) => {
    navigate(`/book/${book.id}`);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, book: Book) => {
    e.stopPropagation();
    navigate(`/edit-book/${book.id}`);
  };

  return (
    <div className='mainContainer'>
      <Header heading="Book List" closeButton={false} addButton={true} />
      <BookList
        books={paginatedBooks}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onEditBook={handleEdit}
        onDeleteBook={deleteBook}
        onBookClick={handleBookClick}
        localBooks={localBooks}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BookListPage;
