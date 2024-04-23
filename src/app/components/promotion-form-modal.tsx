'use client';

import Modal, { IModalProps } from '@/app/components/modal';
import PromotionForm from './promotion-form';

export interface IPromotionFormModalProps extends IModalProps {
  companyId: string;
}

const PromotionFormModal: React.FC<IPromotionFormModalProps> = ({
  companyId,
  onClose,
  ...rest
}) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
};

export default PromotionFormModal;
