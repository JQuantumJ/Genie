import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './pages/Main';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import ConceptPage from './pages/Concept';
import QuizPage from './pages/Quiz';
import Quizmain from './pages/Quizmain';
import QuizMedium from './pages/Medium';
import QuizAdvanced from './pages/Advanced';
import CompanyPage from './pages/Company';
import RecentPage from './pages/Recent';
import DescriptionPage from './pages/Description';
import TopBtn from './components/TopButton/TopButton';
import CharacterPage from './pages/Character';
import CatPage from './pages/Cat';
import CoinEntanglementPage from './pages/CoinEntanglement';
import ScrollToTop from './ScrollToTop';
import CompanyDetail from './components/Company/CompanyDetail';
import BusinessDetail from './components/Company/BusinessDetail';
import ComputingPage from './pages/Computing';
import ChatBot from './components/ChatBot/ChatBot';
import AboutPage from './pages/About';
import Kqic from './components/About/Kqic';
import Nia from './components/About/Nia';
import Industry from './components/Concept/Industry';
import Event from './pages/Event';
import QuantumTimeline from './components/Concept/QuantumTimeline';


export default function Router() {
  return (
    <BrowserRouter>
    <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/medium" element={<QuizMedium />} />
        <Route path="/advanced" element={<QuizAdvanced />} />
        <Route path="/quizmain" element={<Quizmain />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/:companyName" element={<CompanyDetail />} />
        <Route path="/business/:businessName" element={<BusinessDetail />} />
        <Route path="/recent" element={<RecentPage />} />
        <Route path="/coinentanglement" element={<CoinEntanglementPage />} />
        <Route path="/computing" element={<ComputingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/kqic" element={<Kqic />} />
        <Route path="/niq" element={<Nia />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/event" element={<Event />} />
        <Route path="/quantumTimeline" element={<QuantumTimeline />} />
      </Routes>
      <TopBtn />
      <ChatBot />
      <Footer />
    </BrowserRouter>
  );
}
