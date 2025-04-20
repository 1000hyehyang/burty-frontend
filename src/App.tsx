// 📄 App.tsx
import GlobalStyle from "./components/Layout/GlobalStyle";
import AppContainer from "./components/Layout/AppContainer";
import HomePage from "./pages/HomePage";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HomePage />
        <BottomNav />
      </AppContainer>
    </>
  );
}

export default App;
