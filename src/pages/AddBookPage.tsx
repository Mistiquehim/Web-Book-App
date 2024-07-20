import useBooks from '../hooks/useBooks';
import AddBookForm from '../components/AddBookForm';
import Header from '../components/Header';

const AddBookPage = () => {
  const { addBook } = useBooks();

  return (
    <>
      <Header heading="Add Book" closeButton={true} addButton={false}/>
      <AddBookForm onAddBook={addBook} />
    </>
  );
};

export default AddBookPage;
