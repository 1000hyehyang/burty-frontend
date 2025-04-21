// 📄 src/types/kakao.d.ts
export {};

declare global {
  interface Window {
    kakao: {
      maps: typeof kakao.maps;
    };
  }

  const kakao: {
    maps: typeof kakao.maps;
  };
}
