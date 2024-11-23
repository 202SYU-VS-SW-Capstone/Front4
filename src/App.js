import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';     
import Contact from './pages/Contact';
import Header from './components/Header';   
import Footer from './components/Footer';   
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Recipe from './pages/Recipe';
import Ingredient from './pages/Ingredient';
import ImageAnalysis from './pages/ImageAnalysis';
import RecipeResults from './pages/RecipeResults';
import FridgeInventory from './pages/FridgeInventory';
import Manager  from './pages/Manager';
import MemberList from './pages/MemberList';
import Notice from './pages/Notice';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />
        <Route path="/mypage" element={<MainLayout><Mypage /></MainLayout>} />
        <Route path="/recipe" element={<MainLayout><Recipe /></MainLayout>} />
        <Route path="/ingredient" element={<MainLayout><Ingredient /></MainLayout>} />
        <Route path="/imageAnalysis" element={<MainLayout><ImageAnalysis /></MainLayout>} />
        <Route path="/recipeResults" element={<MainLayout><RecipeResults /></MainLayout>} />
        <Route path="/fridgeInventory" element={<MainLayout><FridgeInventory /></MainLayout>} />
        <Route path="/manager" element={<MainLayout><Manager/></MainLayout>} />
        <Route path="/memberList" element={<MainLayout><MemberList/></MainLayout>} />
        <Route path="/Notice" element={<MainLayout><Notice/></MainLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
