'use client';

import Button, { IButtonProps } from '@/app/components/button';
import { useEffect, useState } from 'react';

const MagicButton: React.FC<IButtonProps> = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 2) throw new Error('UNEXPECTED ERROR');
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic Button
    </Button>
  );
};

export default MagicButton;
