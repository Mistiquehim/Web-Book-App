import { useParams, useNavigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import EditBookForm from '../components/EditBookForm';
import { Book } from '../types/book';
import Header from '../components/common/Header';

const EditBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const { localBooks, editBook } = useBooks();
  const navigate = useNavigate();
  const book = localBooks.find(book => book.id === parseInt(id || '0'));

  if (!book) {
    return <p>Book not found</p>;
  }

  const handleEditBook = (e: React.MouseEvent<HTMLButtonElement>, updatedBook: Book) => {
    editBook(e, updatedBook);
    // navigate('/');
  };

  return (
    <div>
      <Header heading="Edit Book" closeButton={true} addButton={false}/>
      <EditBookForm book={book} onEditBook={handleEditBook} onCancel={() => navigate('/')} />
    </div>
  );
};

export default EditBookPage;
