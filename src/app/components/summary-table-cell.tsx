import clsx from 'clsx';

export interface ISummaryTableCellProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const SummaryTableCell: React.FC<ISummaryTableCellProps> = ({
  align = 'left',
  children,
}) => {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
};

export default SummaryTableCell;
