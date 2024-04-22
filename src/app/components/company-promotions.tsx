'use client';

import { useQuery } from '@tanstack/react-query';
import Promotions from '@/app/components/promotion';
import { getPromotions } from '@/lib/api';

export interface ICompanyPromotionsProps {
  companyId: string;
}

const CompanyPromotions: React.FC<ICompanyPromotionsProps> = ({
  companyId,
}) => {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map((promotion) => (
        <div key={promotion.id} className="col-span-4">
          <Promotions promotion={promotion} />
        </div>
      ))}
    </div>
  );
};

export default CompanyPromotions;
