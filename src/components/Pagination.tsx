import style from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  
  const { totalPages, currentPage, onPageChange } = props;

  // Create an array of page numbers based on the total number of pages
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={style.pagination}>
      {pages.map(page => (
        <button
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
