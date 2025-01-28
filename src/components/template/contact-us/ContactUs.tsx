import {
  BlobSection,
  ContactForm,
  ContactUsHero,
  MapBox,
} from "@/components/organism/contact-us";

export function ContactUs() {
  return (
    <section className="min-h-screen">
      <ContactUsHero />
      <BlobSection />
      <ContactForm />
      <div className="~pb-5/28">
        <MapBox />
      </div>
    </section>
  );
}
