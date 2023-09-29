import { Layout } from "./components/Layout";
import Menu from "./components/Menu";
import About from "./views/About";
import Skills from "./views/Skills";
import { Welcome } from "./views/Welcome";

export default function App() {
  return (
    <>
      <Menu />
      <Layout>
        <Welcome />
        <About />
        <Skills />
      </Layout>
    </>
  );
}
