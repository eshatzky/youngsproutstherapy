export function MapBox() {
  return (
    <section className='max-w-[1440px] mx-auto ~px-4/16'>
      <iframe
        className='w-full lg:w-11/12 mx-auto rounded-tr-[30px] lg:rounded-tr-[70px] rounded-bl-[30px] lg:rounded-bl-[70px]'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.4232130033308!2d-79.46416348248638!3d43.807686617812735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s1137%20Centre%20St%20Suite%20%23204%2C%20Thornhill%2C%20ON%20L4J%203M6%2C%20Canada!5e0!3m2!1sen!2sbd!4v1731796678561!5m2!1sen!2sbd'
        width='700'
        height='560'
        loading='lazy'
      ></iframe>
      ;
    </section>
  );
}
