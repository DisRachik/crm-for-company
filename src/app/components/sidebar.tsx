import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';

export interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = ({}) => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={122}
          height={25}
          className="py-8 mb-11 mx-auto"
        />
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
            width={18}
            height={18}
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
