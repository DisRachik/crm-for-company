'use client';

import PromotionForm from '@/app/components/promotion-form';

export interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
};

export default Page;
