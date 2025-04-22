// 📄 App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./components/Layout/GlobalStyle";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SettlementPage from "./pages/SettlementPage";
import CenterMapPage from "./pages/CenterMapPage";
import KeywordSearchPage from "./pages/KeywordSearchPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="settlement" element={<SettlementPage />} />
          <Route path="/settlement/centers" element={<CenterMapPage />} />
          <Route path="/settlement/policy" element={<KeywordSearchPage />} />
          {/* 앞으로 추가될 페이지들 */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
