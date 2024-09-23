import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './pages/Main';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import ConceptPage from './pages/Concept';
import QuizPage from './pages/Quiz';
import DescriptionPage from './pages/Description';
import TopBtn from './components/TopButton/TopButton';
import CharacterPage from './pages/Character';
import Cat from './components/Concept/Cat';

export default function Router() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
      <TopBtn />
      <Footer />
    </BrowserRouter>
  );
}
