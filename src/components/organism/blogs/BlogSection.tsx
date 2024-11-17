import { BlogCardWrapper } from "./BlogCardWrapper";

export function BlogSection() {
  return (
    <section className="w-full max-w-[1300px] px-6 mx-auto flex flex-col gap-7 lg:gap-[34px] @container/blog">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
        <p className="font-medium text-2xl text-[#000]">Latest Blog</p>
        <form className="w-full max-w-[391px] bg-[#F4F2F3] rounded-full flex items-center justify-between  px-6">
          <input
            className="mx-auto w-full accent-black bg-transparent !border-none !outline-none ring-0 focus:outline-none py-3"
            placeholder="Search posts..."
            type="search"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#50474C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
      <BlogCardWrapper />
    </section>
  );
}
