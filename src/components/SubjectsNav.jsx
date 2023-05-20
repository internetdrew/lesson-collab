import Link from 'next/link';
import { subjects } from '../lib';

const navigation = subjects.map(sub => sub.name).sort();

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SubjectsNav = () => {
  return (
    <div>
      <p className='text-sm font-semibold text-gray-500 mb-4 uppercase'>
        subjects
      </p>
      <nav>
        <Link
          href={'/'}
          className='flex items-center rounded-md px-3 py-2 text-lg capitalize font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        >
          All
        </Link>
        {navigation.map(subject => (
          <Link
            key={subject}
            href={`/?subject=${subject}`}
            className={classNames(
              subject.current
                ? 'bg-blue-200 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'flex items-center rounded-md px-3 py-2 text-lg capitalize font-medium'
            )}
            aria-current={subject.current ? 'page' : undefined}
          >
            {subject}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SubjectsNav;
