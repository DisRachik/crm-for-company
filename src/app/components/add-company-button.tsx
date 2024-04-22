'use client';

import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

const AddCompanyButton: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add Company</Button>
    </>
  );
};

export default AddCompanyButton;
