import styles from './BookDetails.module.scss';
import { Book } from '../types/book';
import Header from './common/Header';

type BookDetailsProps = {
    book: Book;
    onClose: () => void;
}

const fallbackImageUrl = "/assets/fallbackImage.png";

const BookDetails = (props: BookDetailsProps) => {

    const { book } = props;

    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = fallbackImageUrl;
    };

    return (
        <div className={styles.cardDetails}>
            <Header heading="Book Details" closeButton={true} addButton={false} />
            <div className={styles.detailContainer}>
                <h3 className={styles.title}>{book.title}</h3>
                <div className={styles.content}>
                    <img src={book.cover} alt={book.title} onError={handleError} />
                    <div className={styles.info}>
                        <p className={styles.name}><b>Author: </b>{book.author}</p>
                        <p className={styles.date}><b>Published On: </b>{new Date(book.publicationDate).toLocaleDateString()}</p>
                    </div>
                </div>
                <p className={styles.text}>{book.description}</p>
            </div>
        </div>
    );
};

export default BookDetails;
