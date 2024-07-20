import styles from './Favourite.module.scss';
import { Book } from '../types/book';

type FavouriteProps = {
    book: Book;
    isFavorite: boolean;
    onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Favourite = (props: FavouriteProps) => {

    const { onToggleFavorite, isFavorite, book } = props;

    return <button className={styles.fav} onClick={(e: React.MouseEvent<HTMLButtonElement>) => onToggleFavorite(e, book.id)}>
        {isFavorite ? '❤️' : '🖤'}
    </button>
}

export default Favourite;