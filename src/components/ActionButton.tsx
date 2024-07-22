import styles from './BookCard.module.scss';
import { Book } from '../types/book';

type ActionButtonProps = {
    book: Book;
    onEditBook: (e: any, book: Book) => void;
    onDeleteBook: (e: any, id: number) => void;
}

const ActionButton = (props: ActionButtonProps) => {

    const { book, onEditBook, onDeleteBook } = props;

    return (<div className={styles.actionBtn}>
        <button className={`${styles.edit} button`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => onEditBook(e, book)}>Edit</button>
        <button className={`${styles.delete} button`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => onDeleteBook(e, book.id)}>Delete</button>
    </div>)
}

export default ActionButton;