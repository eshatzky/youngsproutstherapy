import { FieldErrors, FieldValues } from 'react-hook-form';

interface FieldErrorProps<T extends FieldValues> {
  errors?: FieldErrors<T>;
  field: keyof T;
}
export default function FieldError<T extends FieldValues>({
  errors = {},
  field,
}: FieldErrorProps<T>) {
  const errorMessage = errors[field]?.message as React.ReactNode;

  return (
    <div className='text-red-400 text-sm'>
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
}
