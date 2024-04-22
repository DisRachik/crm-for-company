export interface ILayoutProps {
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({
  header,
  toolbar,
  modal,
  children,
}) => {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
};

export default Layout;
