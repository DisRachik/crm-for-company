import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

export interface IPageProps {
  params: { id: string };
}

const Page: React.FC<IPageProps> = ({ params }) => {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;
