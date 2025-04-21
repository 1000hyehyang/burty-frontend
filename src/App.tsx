// 📄 App.tsx
import GlobalStyle from "./components/Layout/GlobalStyle";
import AppContainer from "./components/Layout/AppContainer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HomePage />
      </AppContainer>
    </>
  );
}

export default App;
