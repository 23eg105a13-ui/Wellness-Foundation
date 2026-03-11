import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Practitioners from './pages/Practitioners';
import PractitionerDetail from './pages/PractitionerDetail';
import Booking from './pages/Booking';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Forum from './pages/Forum';
import AskQuestion from './pages/AskQuestion';
import AIRecommendations from './pages/AIRecommendations';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/practitioners" element={<Practitioners />} />
        <Route path="/practitioners/:id" element={<PractitionerDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ProductDetail />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/ask" element={<AskQuestion />} />
        <Route path="/ai-discovery" element={<AIRecommendations />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/notifications" element={isAuthenticated ? <Notifications /> : <Navigate to="/login" />} />
        <Route path="/booking/:id" element={isAuthenticated ? <Booking /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
