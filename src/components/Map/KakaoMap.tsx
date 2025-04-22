// 📄 components/Map/KakaoMap.tsx
import { useEffect, useState } from "react";
import { loadKakaoMapScript } from "./loadKakaoMap";
import { dummyYouthCenters } from "../../mock/youthCenters";

const KakaoMap = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadKakaoMapScript().then(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const { kakao } = window;

    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(36.5, 127.5),
      level: 12,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const markerImageSrc = "/marker-center.png";
    const imageSize = new kakao.maps.Size(20, 32);
    const imageOption = { offset: new kakao.maps.Point(20, 40) };

    const markerImage = new kakao.maps.MarkerImage(
      markerImageSrc,
      imageSize,
      imageOption
    );

    dummyYouthCenters.forEach((center) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(center.lat, center.lng),
        image: markerImage,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:6px 12px;">${center.name}</div>`,
      });

      kakao.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
      });
    });
  }, [loaded]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    />
  );
};

export default KakaoMap;
