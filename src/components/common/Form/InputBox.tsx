import { UseFormRegister, FieldValues, Path, FieldError } from 'react-hook-form';

type InputBoxProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  register: UseFormRegister<T>;
  required?: boolean;
  type?: string;
  error: FieldError | undefined;
}

const InputBox = <T extends FieldValues>({
  name,
  label,
  register,
  required = false,
  type = 'text',
  error
}: InputBoxProps<T>) => {
  return (
    <div className="inputField">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name, { required })}
        type={type}
        id={name}
      />
      {error && <span className='error'>This field is required</span>}
    </div>
  );
};

export default InputBox;
