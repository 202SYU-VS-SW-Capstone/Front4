import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>  
          <li><Link to="/mypage">mypage</Link></li>  
          <li><Link to="/recipe">recipe</Link></li>  
          <li><Link to="/ingredient">ingredient</Link></li>  
          <li><Link to="/imageAnalysis">imageAnalysis</Link></li>  
          <li><Link to="/recipeResults">RecipeResults</Link></li>  
          <li><Link to="/fridgeInventory">FridgeInventory</Link></li>  
          <li><Link to="/manager">Manager</Link></li>  
          <li><Link to="/memberList">MemberList</Link></li>
          <li><Link to="/notice">Notice</Link></li>
          <li><Link to="/nonMember">NonMember</Link></li>
          <li><Link to="/dataManagement">DataManagement</Link></li>
          <li><Link to="/inquiry">Inquiry</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
