'use client'; // Error components must be Client Components

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className='flex justify-center items-center gap-5 min-h-[100svh]'>
      <div className='-mt-52'>
        <h2 className='text-fluid-2'>هناك خطأ ما!</h2>
        <Button
          variant={'outline'}
          className='border border-custom_gold text-custom_gold bg-white'
          onClick={() => reset()}
        >
          حاول مرة أخرى
        </Button>
      </div>
    </section>
  );
}
