import clsx from 'clsx';
import StatusLabel from '@/app/components/status-label';
import Image from 'next/image';
import { Company } from '@/lib/api';
import Link from 'next/link';

export interface ICompanyRowProps {
  company: Company;
}

const CompanyRow: React.FC<ICompanyRowProps> = ({ company }) => {
  const {
    categoryTitle,
    id,
    title,
    status,
    hasPromotions,
    countryTitle,
    joinedDate,
  } = company;

  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700r rounded-l border-l-4 border-blue-700">
        {categoryTitle}
      </td>
      <td>
        <Link href={`/companies/${id}`}>{title}</Link>
      </td>
      <td>
        <StatusLabel status={status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            src={`/icons/${hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
            width={16}
            height={16}
          />
          <span
            className={clsx(
              'text-sm font-medium ',
              hasPromotions ? 'text-green-700' : 'text-red-700',
            )}
          >
            {hasPromotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{countryTitle}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
};

export default CompanyRow;
