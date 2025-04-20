// 📄 components/BottomNav/BottomNav.tsx
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useState } from "react";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: clamp(56px, 12vw, 64px);
  background-color: white;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  max-width: 430px;
  margin: 0 auto;
`;

const NavButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(10px, 2.8vw, 13px);
  color: ${({ active }) => (active ? "#2c7a58" : "#aaa")};

  svg {
    font-size: clamp(18px, 5vw, 22px);
    margin-bottom: 2px;
  }
`;

const BottomNav = () => {
  const [selected, setSelected] = useState("home");

  return (
    <Nav>
      <NavButton active={selected === "home"} onClick={() => setSelected("home")}>
        <AiFillHome />
        홈
      </NavButton>
      <NavButton active={selected === "community"} onClick={() => setSelected("community")}>
        <MdLocationOn />
        커뮤니티
      </NavButton>
      <NavButton active={selected === "policy"} onClick={() => setSelected("policy")}>
        <FaSearch />
        정책정보
      </NavButton>
      <NavButton active={selected === "jobs"} onClick={() => setSelected("jobs")}>
        <BsBookmark />
        채용
      </NavButton>
      <NavButton active={selected === "profile"} onClick={() => setSelected("profile")}>
        <FiUser />
        내 정보
      </NavButton>
    </Nav>
  );
};

export default BottomNav;
