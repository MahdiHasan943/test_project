'use client'
import React from 'react';
import { useRouter,useSearchParams  } from 'next/navigation';

const PaginationControls = ({ hasNextPage, hasPrevPage }) => {
    const router = useRouter();
    const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '3';

  return (
    <div className='flex items-center gap-4'>
      <button
        className='bg-[#ffc107] rounded-md hover:bg-[#111] ease-linear duration-200 py-3 px-3 hover:text-white font-bold'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blog?page=${Number(page) - 1}&per_page=${per_page}`);
        }}>
« Previous      </button>

      <div className='font-bold text-[20px]'>
        <span className='text-[#ffc107] font-bold'> {page} </span> / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className='bg-[#ffc107] w-[100px] rounded-md hover:bg-[#111] ease-linear duration-200 py-3 px-3 hover:text-white font-bold'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blog?page=${Number(page) + 1}&per_page=${per_page}`);
        }}>
       Next »
      </button>
    </div>
  );
};

export default PaginationControls;
