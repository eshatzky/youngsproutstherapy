import {
  BlobSection,
  ContactForm,
  ContactUsHero,
  MapBox,
} from '@/components/organism/contact-us';

export function ContactUs() {
  return (
    <section className='min-h-screen'>
      <ContactUsHero />
      <BlobSection />
      <MapBox />
      <ContactForm />
    </section>
  );
}
