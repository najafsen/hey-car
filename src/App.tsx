import "./App.css";
import { Layout } from "./layout/layout";
import { Router } from "./router/router";

function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
