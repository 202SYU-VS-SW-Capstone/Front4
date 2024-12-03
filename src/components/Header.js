import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSubmenuOpen(false); // 메뉴 열릴 때 서브메뉴 닫기
  };

  const toggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev);
    setMenuOpen(false); // 서브메뉴 열릴 때 메뉴 닫기
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        {/* 로고 */}
        <Link to="/" className="nav-logo">
          새길
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/login">로그인</Link></li>
          <li><Link to="/signup">회원가입</Link></li>
          <li><Link to="/inquiryForm">문의하기</Link></li>
          
        </ul>

        {/* 모바일 메뉴 토글 */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* 서브메뉴 */}
        <ul className={`submenu ${submenuOpen ? 'active' : ''}`}>
          <li><Link to="/recipe" onClick={toggleSubmenu}>Recipe</Link></li>
          <li><Link to="/imageAnalysis" onClick={toggleSubmenu}>Image Analysis</Link></li>
          <li><Link to="/fridgeInventory" onClick={toggleSubmenu}>Fridge Inventory</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
