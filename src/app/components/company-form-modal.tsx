'use client';

import CompanyForm from '@/app/components/company-form';
import Modal, { IModalProps } from '@/app/components/modal';

export interface ICompanyFormModalProps extends IModalProps {}

const CompanyFormModal = ({ onClose, ...rest }: IModalProps) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
};

export default CompanyFormModal;
