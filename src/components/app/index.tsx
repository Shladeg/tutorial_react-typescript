import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "components/layout";

import TodoPage from "pages/todo";
import InfoPage from "pages/info";

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />

        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
