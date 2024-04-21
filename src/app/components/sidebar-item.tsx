import Image from 'next/image';

export interface ISidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  pathname,
  src,
  alt,
  children,
}) => {
  return (
    <li>
      <a href={pathname} className="flex item-center h-9 mx-1 gap-3.5">
        <Image src={src} alt={alt} width={18} height={18} className="ml-5" />
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
