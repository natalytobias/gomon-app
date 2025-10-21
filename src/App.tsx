import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GomForm from './components/formulario';
import Dashboard from './components/dashboard/dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/formulario" element={<GomForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;
