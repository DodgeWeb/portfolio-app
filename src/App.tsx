import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";
import PortfolioList from "./pages/PortfolioList/PortfolioList";
import "./App.css";
import PortfolioDetail from "./pages/PortfolioDetail/PortfolioDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sub" element={<SubPage />} />
        <Route path="/portfolio" element={<PortfolioList />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
