// 📄 components/Layout/Layout.tsx
import AppContainer, { InnerContainer } from "./AppContainer";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <AppContainer>
      <Header />
      <InnerContainer>
        <Outlet />
      </InnerContainer>
      <BottomNav />
    </AppContainer>
  );
};

export default Layout;
