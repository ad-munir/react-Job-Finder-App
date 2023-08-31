/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import JobDetails from './components/JobDetails/JobDetails';
import Companies from './components/Companies/Companies';
import About from './components/About/About';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import Test from './components/Test';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import RegistrationForm from './components/Auth/RegistrationForm';
import LoginForm from './components/Auth/LoginForm';

function App() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <Router>
      {isLoggedIn &&
        <>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      }
      <Routes>
        <Route path="/" exact element={<Layout><Home /></Layout>} />
        <Route path="/job-details" element={<Layout><JobDetails /></Layout>} />
        <Route path="/companies" element={<Layout><Companies /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />

        <Route path="*" element={<Layout><Home /></Layout>} />
        <Route path='/dd' element={<Test />} />
      </Routes>
    </Router>
  )
}


function Layout({ children }) {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
export default App
