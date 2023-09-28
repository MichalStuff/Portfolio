type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <main className="flex flex-col items-center w-[100%] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1040px] ">
      {props.children}
    </main>
  );
};
