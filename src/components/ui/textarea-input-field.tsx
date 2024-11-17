import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from './label';
import { FieldErrors, FieldValues } from 'react-hook-form';
import FieldError from '../shared/FieldError';

type InputProps<T extends FieldValues> = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  errors?: FieldErrors<T>;
  name?: keyof T;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps<FieldValues>>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-2'>
        <Label className='text-lg text-black' htmlFor={id}>
          {label}
        </Label>
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
            className
          )}
          ref={ref}
          {...props}
        />
        {props.errors && props.name && (
          <FieldError errors={props.errors} field={props.name} />
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
