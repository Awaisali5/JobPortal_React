const Hero = ({
  title = 'Become a Full Stack dev',
  subtitle = 'Find the Full Stack job that fits your skill set',
}) => {
  return (
    <section className='bg-sky-50 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-extrabold text-black sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-slate-500'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
