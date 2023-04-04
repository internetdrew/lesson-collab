const SinglePanelContainer = ({ children }) => {
  return (
    <main className='relative mt-24'>
      <div className='mx-auto max-w-screen-md px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
        <div className='overflow-hidden rounded-lg bg-white shadow'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default SinglePanelContainer;
