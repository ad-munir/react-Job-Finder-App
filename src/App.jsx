// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import JobDetails from './components/JobDetails/JobDetails';
import Companies from './components/Companies/Companies';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

function App() {

  return (
    <div className="w-[85%] m-auto bg-white">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
