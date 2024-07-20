import styles from './BookList.module.scss';
import { Book } from '../types/book';
import BookCard from './BookCard';

type BookListProps = {
  books: Book[];
  favorites: number[];
  onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onEditBook: (e: any, book: Book) => void;
  onDeleteBook: (e: any, id: number) => void;
  onBookClick: (book: Book) => void;
  localBooks: Book[];
}

const BookList = (props: BookListProps) => {
  
  const { books, favorites, onToggleFavorite, onEditBook, onDeleteBook, onBookClick } = props;

  return (
    <div className={styles.list}>
      {books.map(book => (
        <div key={book.id} className={styles.item}>
          <BookCard
            book={book}
            isFavorite={favorites.includes(book.id)}
            onToggleFavorite={onToggleFavorite}
            onBookClick={onBookClick}
            onEditBook={onEditBook}
            onDeleteBook={onDeleteBook}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
