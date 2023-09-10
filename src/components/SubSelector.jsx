import { subjects } from '../lib';
import { useRouter } from 'next/router';

const SubSelector = () => {
  const formattedSubs = subjects.map(sub => {
    const words = sub.split(' ');
    const capped = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return capped;
  });
  const router = useRouter();

  const handleChange = e => {
    if (e.target.value === 'all') {
      return router.push('/');
    }
    router.push(`/?subject=${e.target.value.toLowerCase()}`);
  };

  return (
    <div className='mb-6 w-full mx-auto relative md:hidden'>
      <select
        name='subject-nav'
        className='w-full rounded-lg shadow-md'
        onChange={handleChange}
      >
        <option value='all'>All</option>
        {formattedSubs.map(sub => (
          <option key={sub} value={`${sub}`}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubSelector;
