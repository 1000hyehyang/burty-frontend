// 📄 App.tsx
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./components/Layout/GlobalStyle";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SettlementPage from "./pages/SettlementPage";
import YouthContentDetailPage from "./pages/YouthContentDetailPage";
import PolicyDetailPage from "./pages/PolicyDetailPage";
import CenterMapPage from "./pages/CenterMapPage";
import KeywordSearchPage from "./pages/KeywordSearchPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import JobsPage from "./pages/JobsPage";
import MyPage from "./pages/MyPage";
import BookmarkedPoliciesPage from "./pages/BookmarkedPoliciesPage";
import MyPostsPage from "./pages/MyPostsPage";
import LikedPostsPage from "./pages/LikedPostsPage";
import CommentedPostsPage from "./pages/CommentedPostsPage";
import EditProfilePage from "./pages/EditProfilePage";
import LoginPage from "./pages/LoginPage";
import { useCommunityStore } from "./store/community/useCommunityStore";
import { dummyCommunityPosts } from "./mock/communityPosts";
import { dummyCommunityComments } from "./mock/communityComments";

function App() {
  const setInitialData = useCommunityStore((state) => state.setInitialData);
  const isInitialized = useCommunityStore((state) => state.posts.length > 0 && state.comments.length > 0);

  useEffect(() => {
    if (!isInitialized) {
      setInitialData(dummyCommunityPosts, dummyCommunityComments);
    }
  }, [isInitialized, setInitialData]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/settlement" element={<SettlementPage />} />
          <Route path="/settlement/content/:id" element={<YouthContentDetailPage />} />
          <Route path="/settlement/centers" element={<CenterMapPage />} />
          <Route path="/settlement/policy" element={<KeywordSearchPage />} />
          <Route path="/policy/:id" element={<PolicyDetailPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:postId" element={<CommunityDetailPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/profile/bookmarks" element={<BookmarkedPoliciesPage />} />
          <Route path="/community/my-posts" element={<MyPostsPage />} />
          <Route path="/community/liked" element={<LikedPostsPage />} />
          <Route path="/community/comments" element={<CommentedPostsPage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* 앞으로 추가될 페이지들 */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;