import { getSummaryStats } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import { StatCard, StatCardType } from '@/app/components/stat-card';

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

const Page: React.FC = async () => {
  const data = await getSummaryStats();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-5">
        {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
          <div key={key} className="col-span-3">
            <StatCard
              type={StatCardType.Gradient}
              label={labelByStat[key]}
              counter={data[key]}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default Page;
