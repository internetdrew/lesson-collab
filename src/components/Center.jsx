const Center = ({ children }) => {
  return (
    <section className='flex pt-10 w-screen'>
      <div className='w-[90%] md:w-1/2 mx-auto flex flex-col'>{children}</div>
    </section>
  );
};

export default Center;
