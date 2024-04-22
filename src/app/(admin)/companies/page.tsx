import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import { Status } from '@/app/components/status-label';

const Page: React.FC = () => {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category={'Products'}
        company={'Costco Wholesale'}
        status={Status.Pending}
        promotion={true}
        country={'USA'}
        joinedDate={'19.02.2023'}
      />
    </CompanyTable>
  );
};

export default Page;
