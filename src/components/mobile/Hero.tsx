const HeroMobile = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full pt-8 overflow-x-clip'>
      <div className='relative'>
        <div className='z-[-1] absolute -inset-x-6 -inset-y-10 w-[415px] h-[300px] bg-ruddy-blue rounded-[50%] rotate-[-20deg]' />
        <div className='rounded-full w-[260px] h-[260px] bg-oleg-d bg-cover bg-no-repeat bg-center' />
      </div>

      <div className='px-8 pt-5'>
        <h2 className='text-5xl font-bold text-center text-pine-green'>
          Full-Stack Developer
        </h2>
        <p className='pt-4 text-center text-onyx text-2xl leading-[165%]'>
          Greetings! I'm Oleg Didechkin, a dedicated and imaginative
          web-developer with a rich array of expertise and a passion for
          crafting digital experiences.
        </p>
      </div>
    </div>
  );
};

export default HeroMobile;
