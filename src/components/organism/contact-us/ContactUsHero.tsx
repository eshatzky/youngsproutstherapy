export function ContactUsHero() {
  return (
    <div className='relative bg-[url("/images/contact-us.webp")] bg-no-repeat bg-cover bg-center max-w-[1440px] mx-4 lg:mx-auto ~p-20/36 rounded-3xl'>
      <div className='absolute inset-0 bg-[#0196AFCF] opacity-70  rounded-3xl'></div>
      <div className='relative text-center text-white space-y-6'>
        <p className='~text-lg/2xl font-medium'>Young Sprouts Therapy</p>
        <h2 className='~text-2xl/5xl font-bold'>Contact</h2>
      </div>
    </div>
  );
}
