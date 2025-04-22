// 📄 utils/timeAgo.ts
export const getTimeAgo = (dateString: string): string => {
    if (!dateString) return "날짜 없음";
  
    const created = new Date(dateString);
    if (isNaN(created.getTime())) return "유효하지 않은 날짜";
  
    const now = new Date();
    const diff = Math.floor((now.getTime() - created.getTime()) / 1000); // 초 단위
  
    if (diff < 60) return `${diff}초 전`;
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;
  
    return created.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  