'use client';

import * as yup from 'yup';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Input } from '@/components/ui/text-input-field';
import { Textarea } from '@/components/ui/textarea-input-field';

export const loginSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Enter valid email').required(),
  message: yup.string().required('Message is required'),
});

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      await emailjs
        .sendForm(
          'service_hmo98vn',
          'template_9do5abh',
          form.current,
          'NBm1Am8HA6NeOIEUY'
        )
        .then(
          () => {
            toast.success('Email sent successfully!');
          },
          () => {
            toast.error('Failed to send email. Please try again.');
          }
        );
    }

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className='max-w-[1440px] mx-auto ~p-5/28'>
      <div className='w-full lg:w-6/12 mx-auto'>
        <form className='space-y-6' onSubmit={handleSubmit} ref={form}>
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter first name'
            id='email'
            label='First name*'
            name='first_name'
            required
          />
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter last name'
            id='email'
            label='Last name*'
            name='last_name'
            required
          />
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter email address'
            id='email'
            label='Email address*'
            name='email'
            required
          />
          <Input
            className='py-5 bg-gray-100'
            placeholder='Enter phone number'
            id='email'
            label='Phone*'
            name='phone'
            required
          />
          <Textarea
            className=' bg-gray-100'
            placeholder='Enter message'
            id='message'
            label='Message*'
            name='message'
            required
          />

          <div>
            <Button className='lg:max-w-full' disabled={isSubmitting}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
