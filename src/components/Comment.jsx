import { Reply } from './';

const Comment = () => {
  return (
    <div className='flex'>
      <span className='inline-flex shrink-0 mr-4 h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='font-medium leading-none text-white'>TU</span>
      </span>
      <div>
        <p>
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
        <div>This</div>
        <Reply />
        <Reply />
      </div>
    </div>
  );
};

export default Comment;
