export interface IToolbarProps {
  action?: React.ReactNode;
  children: React.ReactNode;
}

const Toolbar: React.FC<IToolbarProps> = ({ action, children }) => {
  return (
    <div className="flex items-center gap-7 py-8 px-10">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
};

export default Toolbar;
