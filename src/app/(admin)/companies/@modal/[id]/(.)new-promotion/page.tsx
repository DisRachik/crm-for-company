'use client';

import { useRouter } from 'next/router';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default Page;
