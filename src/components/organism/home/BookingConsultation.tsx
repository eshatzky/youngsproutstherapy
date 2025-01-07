import { BookingCalender } from "@/components/shared/BookingCalendar";

export function BookingConsultation() {
  return (
    <section
      id="book-consultation"
      className="~py-14/20 ~px-5/0 bg-[#fbfcfd] ~mb-14/20 min-h-screen h-auto"
    >
      <BookingCalender />
    </section>
  );
}
