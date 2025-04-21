// 📄 src/App.tsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import GlobalStyle from "./components/Layout/GlobalStyle";
import BottomNav from "./components/BottomNav/BottomNav";
import HomePage from "./pages/HomePage";
import SettlementPage from "./pages/SettlementPage";

function App() {
  const location = useLocation();
  const isBottomNavVisible = ["/", "/settlement", "/community", "/jobs", "/profile"].includes(location.pathname);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settlement" element={<SettlementPage />} />
        {/* 🔜 확장용 페이지도 여기에 추가 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isBottomNavVisible && <BottomNav />}
    </>
  );
}

export default App;
