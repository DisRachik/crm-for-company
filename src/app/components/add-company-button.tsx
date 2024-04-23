'use client';

import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

const AddCompanyButton: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new', { scroll: false })}>
        Add Company
      </Button>
    </>
  );
};

export default AddCompanyButton;
