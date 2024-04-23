'use client';

import { Field } from 'formik';

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: React.ReactNode;
}

const InputField: React.FC<IInputFieldProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border bg-gray-300 shadow"
      />
    </div>
  );
};

export default InputField;
