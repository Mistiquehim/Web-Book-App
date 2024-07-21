import { useForm } from 'react-hook-form';
import styles from './AddBookForm.module.scss';
import { Book } from '../types/book';
import InputBox from './common/Form/InputBox';
import Textarea from './common/Form/Textarea';
import Button from './common/Form/Button';
import { useNavigate } from 'react-router-dom';

type EditBookFormProps = {
  book: Book;
  onEditBook: (e: React.MouseEvent<HTMLButtonElement>, book: Book) => void;
  onCancel: () => void;
}

const EditBookForm = (props: EditBookFormProps) => {

  const navigate = useNavigate();
  const { book, onEditBook } = props;

  const { register, handleSubmit, formState: { errors } } = useForm<Book>({
    defaultValues: book,
  });

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(async (data) => {
      try {
      await onEditBook(e, { ...data, id: book.id });
      navigate('/');
      } catch (error) {
        console.error('Error updating book:', error);
      }
    })(e);
  };

  return (
    <form className={styles.formInp} onSubmit={handleFormSubmit}>
      <InputBox name="title" label="Book Name" register={register} required error={errors.title} />
      <InputBox name="author" label="Author Name" register={register} error={errors.author} required />
      <Textarea name="description" label="Description" register={register} error={errors.description} required />
      <InputBox name="cover" label="cover" register={register} error={errors.cover} required />
      <InputBox type="date" name="publicationDate" label="Publish Date" register={register} error={errors.publicationDate} required />
      <Button type="submit" className={`${styles.saveButton} button`}>Save Changes</Button>
    </form>
  );
};

export default EditBookForm;
