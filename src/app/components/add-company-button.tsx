'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/button';

const CompanyFormModal = dynamic(
  () => import('@/app/components/company-form-modal'),
  {
    ssr: false,
  },
);

const AddCompanyButton: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
