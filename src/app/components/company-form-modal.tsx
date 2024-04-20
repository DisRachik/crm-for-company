'use client';

import CompanyForm, { ICompanyFormProps } from '@/app/components/company-form';
import Modal, { IModalProps } from '@/app/components/modal';

export interface ICompanyFormModalProps extends IModalProps {
  onSubmit: ICompanyFormProps['onSubmit'];
}

const CompanyFormModal: React.FC<ICompanyFormModalProps> = ({
  onSubmit,
  ...rest
}) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
