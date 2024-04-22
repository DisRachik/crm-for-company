'use client';

import { getCompanies } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import CompanyRow from '@/app/components/company-row';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

const CompanyTable: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });

  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((item, i) => (
              <th key={i} className="pb-5 text-sm font-light text-gray-900">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
