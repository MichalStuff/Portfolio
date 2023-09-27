type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <main className="bg-navy text-white font-roboto font-normal">
      {props.children}
    </main>
  );
};
