import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import UpdateSkillsCards from './pages/UpdateSkills';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/update-Skills" element={<UpdateSkillsCards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
