import styles from './BookCard.module.scss';
import { Book } from '../types/book';
import ActionButton from './ActionButton';
import FavouriteButton from './FavouriteButton';

type BookCardProps = {
    book: Book;
    isFavorite: boolean;
    onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
    onBookClick: (book: Book) => void;
    onEditBook: (e: any, book: Book) => void;
    onDeleteBook: (e: any, id: number) => void;
}

const fallbackImageUrl = "/assets/fallbackImage.png";

const BookCard = (props: BookCardProps) => {

    const { book, isFavorite, onToggleFavorite, onBookClick, onEditBook, onDeleteBook } = props;

    // Function to handle the image error and set fallback image 
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = fallbackImageUrl;
    };

    return (
        <div className={styles.card} onClick={() => onBookClick(book)}>
            <h3 className={styles.title}>{book.title}</h3>
            <div className={styles.content}>
                <img src={book.cover} alt={book.title} onError={handleError} />
                <div className={styles.info}>
                    <p className={styles.name}><b>Author: </b>{book.author}</p>
                    <p className={styles.date}><b>Published On: </b>{new Date(book.publicationDate).toLocaleDateString()}</p>
                </div>
            </div>
            <p className={styles.text}>{book.description}</p>
            <FavouriteButton book={book} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
            {book.isLocal && ( <ActionButton book={book} onEditBook={onEditBook} onDeleteBook={onDeleteBook} />)}
        </div>
    );
};

export default BookCard;
