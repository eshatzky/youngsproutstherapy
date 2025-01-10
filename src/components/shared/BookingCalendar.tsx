type BookingCalenderProps = {
  text?: string;
};

export const BookingCalender = ({ text }: BookingCalenderProps) => {
  return (
    <div className="space-y-4 h-full">
      <h2 className="text-center text-2xl font-bold text-black px-4">
        {text ? (
          text
        ) : (
          <>
            Book Your <span className="text-primary">Free 15-Minute</span>{" "}
            Consultation
          </>
        )}
      </h2>
      <p className="text-center text-gray-600 px-4">
        See how our therapy services can help your child and family.
      </p>
      <div className="relative w-full h-full  bg-transparent">
        <div className="h-full no-scrollbar overflowScrollbar">
          <iframe
            className=" h-full rounded-lg  min-h-[135vh] sm:min-h-[1200px] lg:min-h-[900px] w-full overflowScrollbar "
            src="https://calendly.com/youngsproutstherapy/15-minute-consult?month=2024-07"
            frameBorder="0"
            allowFullScreen
            scrolling="no"
            loading="eager"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
