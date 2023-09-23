import { Layout } from "./components/Layout";
import Menu from "./components/Menu";
import { Welcome } from "./views/Welcome";

export default function App() {
  return (
    <>
      <Menu />
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
}
