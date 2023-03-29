import { useState, useRef } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);

  const handleClearSearch = () => {
    searchRef.current.value = '';
    setSearchTerm('');
  };

  return (
    <div className='w-1/2 duration-300 mx-auto mb-10'>
      <div className='flex px-4 py-2 items-center gap-2 bg-gray-100 border rounded-full shadow-sm focus-within:shadow-xl'>
        <AiOutlineSearch className='text-xl text-gray-600' />
        <input
          type='text'
          ref={searchRef}
          placeholder='Search for topics...'
          className='bg-transparent w-[80%] py-1 text-lg text-gray-600 focus-within:outline-none'
          onChange={e => setSearchTerm(e.target.value)}
        />
        {searchTerm !== '' && (
          <AiOutlineClose
            className='text-xl w-5 h-5 text-gray-500 cursor-pointer ml-auto'
            onClick={handleClearSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
