// 📄 components/Layout/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif;
  background-color: #f4f7f3;
}

body {
  font-size: clamp(14px, 4vw, 18px);
  -webkit-font-smoothing: antialiased;
}

body::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

button {
  all: unset;
  cursor: pointer;
}
`;

export default GlobalStyle;
