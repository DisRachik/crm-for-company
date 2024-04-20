import Header from '@/app/components/header';

export interface IPageProps {
  params: { id: string };
}

export const generateStaticParams = () => [
  { id: '1' },
  { id: '2' },
  { id: '3' },
];

const Page: React.FC<IPageProps> = ({ params }) => {
  return <Header>Companies ({params.id})</Header>;
};

export default Page;
