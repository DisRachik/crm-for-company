import Header from '@/app/components/header';

export interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  return <Header>{`Company (${params.id})`}</Header>;
};

export default Page;
