import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

const Page: React.FC = () => {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;
