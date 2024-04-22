'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';

export interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) notFound();
  }, [params.id]);

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
};

export default Page;
