import { useState } from 'react';  // Import the useState hook from React
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook for navigation
import useBooks from '../hooks/useBooks';  // Import the custom useBooks hook
import BookList from '../components/BookList';  // Import the BookList component
import Pagination from '../components/Pagination';  // Import the Pagination component
import { Book } from '../types/book';  // Import the Book type
import Header from '../components/common/Header';  // Import the Header component

const BookListPage = () => {
  // Destructure values from the custom useBooks hook
  const { books, localBooks, favorites, toggleFavorite, deleteBook } = useBooks();
  
  // State for managing the current page of the pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  // useNavigate hook to programmatically navigate to different routes
  const navigate = useNavigate();
  
  // Number of books to display per page
  const booksPerPage = 5;
  
  // Combine books fetched from the API with locally added/edited books
  const totalBooks = [...books, ...localBooks];
  
  // Calculate the total number of pages for pagination
  const totalPages = Math.ceil(totalBooks.length / booksPerPage);

  // Handle page change for pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Slice the totalBooks array to get the books to display on the current page
  const paginatedBooks = totalBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  // Handle click on a book to navigate to the book detail page
  const handleBookClick = (book: Book) => {
    navigate(`/book/${book.id}`);
  };

  // Handle click on the edit button to navigate to the edit book page
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, book: Book) => {
    e.stopPropagation();  // Prevent the click event from bubbling up
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
