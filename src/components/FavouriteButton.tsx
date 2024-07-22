import styles from './BookCard.module.scss';
import { Book } from '../types/book';

type FavouriteButtonProps = {
    book: Book;
    isFavorite: boolean;
    onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const FavouriteButton = (props: FavouriteButtonProps) => {

    const { book, isFavorite, onToggleFavorite } = props;

    return (<button className={styles.fav} onClick={(e: React.MouseEvent<HTMLButtonElement>) => onToggleFavorite(e, book.id)}>
        {isFavorite ? '❤️' : '🖤'}
    </button>)
}

export default FavouriteButton;

