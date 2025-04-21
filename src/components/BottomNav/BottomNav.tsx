// 📄 components/BottomNav/BottomNav.tsx
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { TbTie } from "react-icons/tb";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { useState } from "react";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 500px;
  margin: 0 auto;
  background-color: var(--variable-collection-bg-100);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: clamp(56px, 12vw, 68px);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
  z-index: 999;
`;

const NavButton = styled.button<{ active?: boolean }>`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  font-size: clamp(11px, 3vw, 13px);
  color: ${({ active }) =>
    active
      ? "var(--variable-collection-primary-100)"
      : "var(--variable-collection-text-300)"};

  svg {
    font-size: clamp(20px, 5vw, 24px);
  }
`;

const BottomNav = () => {
  const [selected, setSelected] = useState("home");

  return (
    <Nav>
      <NavButton
        active={selected === "home"}
        onClick={() => setSelected("home")}
      >
        <AiFillHome />홈
      </NavButton>
      <NavButton
        active={selected === "community"}
        onClick={() => setSelected("community")}
      >
        <MdGroups />
        커뮤니티
      </NavButton>
      <NavButton
        active={selected === "policy"}
        onClick={() => setSelected("policy")}
      >
        <FaHouseChimneyUser />
        정착 정보
      </NavButton>
      <NavButton
        active={selected === "jobs"}
        onClick={() => setSelected("jobs")}
      >
        <TbTie />
        채용
      </NavButton>
      <NavButton
        active={selected === "profile"}
        onClick={() => setSelected("profile")}
      >
        <HiUser />내 정보
      </NavButton>
    </Nav>
  );
};

export default BottomNav;
