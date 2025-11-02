import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GomForm from './components/pages/formulario';
import Dashboard from './components/dashboard/dashboard';
import Home from './components/pages/home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<GomForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
