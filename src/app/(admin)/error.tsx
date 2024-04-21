'use client';

import Button from '@/app/components/button';

export interface IErrorComponentProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent: React.FC<IErrorComponentProps> = ({ error, reset }) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
