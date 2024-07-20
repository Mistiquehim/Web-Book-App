import { UseFormRegister, FieldValues, Path, FieldError } from 'react-hook-form';

interface TextAreaProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error: FieldError | undefined;
}

const TextArea = <T extends FieldValues>({
  name,
  label,
  register,
  required = false,
  error
}: TextAreaProps<T>) => {
  return (
    <div className="textareaField">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        {...register(name, { required })}
        id={name}
      />
      {error && <span className='error'>This field is required</span>}
    </div>
  );
};

export default TextArea;
