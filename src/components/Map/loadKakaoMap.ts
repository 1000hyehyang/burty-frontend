// 📄 components/Map/loadKakaoMap.ts
export const loadKakaoMapScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve();
        return;
      }
  
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
      script.async = true;
  
      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve();
        });
      };
  
      script.onerror = () => reject(new Error("Kakao Maps script failed to load"));
      document.head.appendChild(script);
    });
  };
  