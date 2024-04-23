'use client';

import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

const Page: React.FC = () => {
  const router = useRouter();

  return <CompanyFormModal show={true} onClose={() => router.back()} />;
};

export default Page;
