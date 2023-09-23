// import Menu from "./Menu";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <main className="h-[200svh] bg-navy text-white font-roboto font-normal overflow-auto">
      {props.children}
    </main>
  );
};
