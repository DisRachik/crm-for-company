'use client';

import { createPromotion, getCompany } from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import InputField from '@/app/components/input-field';
import LogoUploader from '@/app/components/logo-uploader';
import Button from '@/app/components/button';

export type PromotionFieldValues = {
  title: string;
  description: string;
  discount: string | number;
};

export interface IPromotionFormProps {
  companyId: string;
  onSubmit?: (value: PromotionFieldValues) => void | Promise<void>;
}

const initialValues: PromotionFieldValues = {
  title: '',
  description: '',
  discount: '',
};

const PromotionForm: React.FC<IPromotionFormProps> = ({
  companyId,
  onSubmit,
}) => {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
    enabled: Boolean(companyId),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPromotion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promotions', companyId],
      });

      queryClient.invalidateQueries({
        queryKey: ['promotions'],
        exact: true,
      });
    },
  });

  const handleSubmit = async (values: PromotionFieldValues) => {
    await mutateAsync({
      ...values,
      discount: Number(values.discount) || 0,
      companyId: company!.id,
      companyTitle: company!.title,
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new promotion</p>
        <div className="flex flex-col gap-5">
          <InputField required label="Title" placeholder="Title" name="title" />
          <InputField
            required
            label="Description"
            placeholder="Description"
            name="description"
          />
          <InputField
            required
            type="number"
            label="Discount"
            placeholder="Discount"
            name="discount"
          />
          <LogoUploader square label="Image" placeholder="Upload photo" />
        </div>
        <Button type="submit" disabled={isPending}>
          Add promotion
        </Button>
      </Form>
    </Formik>
  );
};

export default PromotionForm;
