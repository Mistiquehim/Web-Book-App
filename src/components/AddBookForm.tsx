import styles from './AddBookForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Book } from '../types/book';
import InputBox from './common/Form/InputBox';
import Textarea from './common/Form/Textarea';
import Button from './common/Form/Button';

type AddBookFormProps = {
  onAddBook: (book: Book) => void;
}

type BookFormValues = {
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
}

const AddBookForm = (props: AddBookFormProps) => {

  const { onAddBook } = props;

  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<BookFormValues>();

  const onSubmit: SubmitHandler<BookFormValues> = (data) => {
    const newBook: Book = {
      id: Date.now(), // Generate a unique ID for the book
      isLocal: true, // Indicate that this book is locally added
      ...data
    };
    onAddBook(newBook);
    reset();
  };

  return (
    <form className={styles.formInp} onSubmit={handleSubmit(onSubmit)}>
      <InputBox name="title" label="Book Name" register={register} required error={errors.title} />
      <InputBox name="author" label="Author Name" register={register} error={errors.author} required />
      <Textarea name="description" label="Description" register={register} error={errors.description} required />
      <InputBox name="cover" label="Cover" register={register} error={errors.cover} required />
      <InputBox type="date" name="publicationDate" label="Publish Date" register={register} error={errors.publicationDate} required />
      <Button type="submit" className={`${styles.saveButton} button`} disabled={isSubmitting}>Add Book</Button>
    </form>
  );
};

export default AddBookForm;
