import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#F8F9FA] w-full">
      <section className="~py-7/12 max-w-[1440px] border-b border-[#B0DEE6] mx-auto w-full ~px-2.5/16 flex flex-col lg:flex-row gap-6 justify-between lg:gap-[120px]">
        <div className="flex flex-col max-sm:items-center max-sm:justify-center gap-6">
          <Image
            src={"/svg/footer.svg"}
            alt="footer logo"
            width={140}
            height={60}
            className="w-[133px] h-[50px] aspect-auto "
          />
          <p className="text-[#77808B] max-w-[336px] w-full max-sm:text-center ">
            Tailored ADHD therapy and counseling for children and teens in
            Thornhill, Vaughan. Empower your child with effective strategies for
            focus and growth.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <h3 className="text-secondary font-bold leading-5 whitespace-nowrap max-sm:text-center">
            Get in Touch
          </h3>
          <ul className="flex flex-col gap-5 max-sm:items-center max-sm:justify-center">
            <li className="flex gap-4 leading-6 text-[#77808B] max-w-[193px] w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
                  fill="#0196AF"
                />
              </svg>
              1137 Centre St Suite #204, Thornhill, ON L4J 3M6
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#0196AF"
                />
              </svg>
              <span>info@youngsproutstherapy.com</span>
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                  fill="#0196AF"
                />
              </svg>
              (+289) 579-4769 (GROW)
            </li>
          </ul>
        </div>
        <div className="sm:flex flex-col gap-7 hidden ">
          <h3 className="text-secondary font-bold leading-5 whitespace-nowrap">
            Quick link
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
              <Link href={"/teams"}>Teams </Link>
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
              <Link href={"/fees"}>Fees</Link>
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
              <Link href={"/faq"}>FaQ</Link>
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="sm:flex flex-col gap-7 hidden">
          <h3 className="text-secondary font-bold leading-5 whitespace-nowrap">
            Date & Time
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 leading-6 text-[#77808B] ">
              Monday - Thursday
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] ">
              9:00 am - 9:00 pm
            </li>
            <li className="flex gap-4 leading-6 text-[#77808B] ">Friday</li>
            <li className="flex gap-4 leading-6 text-[#77808B] ">
              9:00 am – 3:00 pm
            </li>

            <li className="flex gap-4 leading-6 text-secondary">Saturday</li>
            <li className="flex gap-4 leading-6 text-red-500 ">Closed</li>
            <li className="flex gap-4 leading-6 text-secondary">Sunday</li>
            <li className="flex gap-4 leading-6 text-[#77808B] ">
              9:00 am – 9:00 pm
            </li>
          </ul>
        </div>
        <div className="flex gap-14 justify-center">
          <div className="flex flex-col gap-7 sm:hidden ">
            <h3 className="text-primary font-bold leading-5 whitespace-nowrap">
              Quick link
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
                <Link href={"/teams"}>Teams </Link>
              </li>
              <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
                <Link href={"/fees"}>Fees</Link>
              </li>
              <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
                <Link href={"/faq"}>FaQ</Link>
              </li>
              <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li className="flex gap-4 leading-6 text-[#77808B] hover:underline">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-7 sm:hidden">
            <h3 className="text-secondary font-bold leading-5 whitespace-nowrap">
              Date & Time
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-4 leading-6 text-[#77808B] ">
                Monday - Friday
              </li>
              <li className="flex gap-4 leading-6 text-[#77808B] ">
                11:00am - 7:00pm
              </li>
              <li className="flex gap-4 leading-6 text-primary">
                Saturday & Sunday
              </li>
              <li className="flex gap-4 leading-6 text-red-500 ">Closed</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="py-6 ~px-4/10">
        <p className="leading-6 text-center text-[#333]">
          © {currentYear} Young Sprouts Therapy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
