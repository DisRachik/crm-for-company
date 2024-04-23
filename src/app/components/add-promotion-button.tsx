'use client';

import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export interface IAddPromotionButtonProps {
  companyId: string;
}

const AddPromotionButton: React.FC<IAddPromotionButtonProps> = ({
  companyId,
}) => {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotions
    </Button>
  );
};

export default AddPromotionButton;
