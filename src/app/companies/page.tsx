import AddCompanyButton from '@/app/components/add-company-button';
import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import Header from '@/app/components/header';
import SearchInput from '@/app/components/search-input';
import { Status } from '@/app/components/status-label';
import Toolbar from '@/app/components/toolbar';

const Page: React.FC = () => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={0}
          category={'Products'}
          company={'Costco Wholesale'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'19.02.2023'}
        />
      </CompanyTable>
    </>
  );
};

export default Page;
