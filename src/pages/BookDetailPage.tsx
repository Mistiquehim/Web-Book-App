import { useParams, useNavigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import BookDetails from '../components/BookDetails';

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { books, localBooks } = useBooks();
  const navigate = useNavigate();
  const allBooks = [...books, ...localBooks];
  const book = allBooks.find(book => book.id === parseInt(id || '0'));

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <BookDetails book={book} onClose={() => navigate('/')} />
  );
};

export default BookDetailPage;
