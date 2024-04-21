import MagicButton from '@/app/components/magic-button';

export interface IPageProps {}

const Page: React.FC<IPageProps> = ({}) => {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
};

export default Page;
