import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import Assets
import fotoDanil from './assets/danil.jpg';  
import fotoNizam from './assets/nizam.jpg'; 
import fotoBryan from './assets/bryan.jpg'; 

// Import Halaman Profil 
import ProfileDanil from './pages/Danil/App'; 
import ProfileNizam from './pages/Nizam/App';
import ProfileBrian from './pages/Bryan/App';

const teamMembers = [
  { id: 1, name: "Danil", photo: fotoDanil, path: "/danil" },
  { id: 2, name: "Nizam", photo: fotoNizam, path: "/nizam" },
  { id: 3, name: "Brian", photo: fotoBryan, path: "/brian" }
];

// --- KOMPONEN DASHBOARD ---
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      key="list" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      style={{ textAlign: 'center' }}
    >
      <h1 style={{ marginBottom: '40px' }}>Profil Kelompok 11</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {teamMembers.map((member) => (
          <motion.div 
            key={member.id} 
            onClick={() => navigate(member.path)} // Pindah ke halaman profil
            whileHover={{ y: -10, scale: 1.05 }}
            style={{ 
              backgroundColor: '#16213e', 
              padding: '20px', 
              borderRadius: '15px', 
              width: '150px', 
              cursor: 'pointer', 
              border: '1px solid #0f3460' 
            }}
          >
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              overflow: 'hidden', margin: '0 auto 10px', border: '2px solid #e94560' 
            }}>
              <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontWeight: 'bold', margin: 0 }}>{member.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


function App() {
  return (
    <div style={{ backgroundColor: '#1a1a2e', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'sans-serif' }}>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Halaman Depan */}
            <Route path="/" element={<Dashboard />} />

            {/* Halaman Profil Masing-masing */}
            <Route path="/danil" element={<ProfileDanil />} />
            <Route path="/nizam" element={<ProfileNizam />} />
            <Route path="/brian" element={<ProfileBrian />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;