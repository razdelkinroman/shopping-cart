interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col m-auto h-full" style={{ maxWidth: '1366px' }}>
      {children}
    </div>
  );
};

export default Layout;
