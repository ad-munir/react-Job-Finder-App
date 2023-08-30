// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import JobDetails from './components/JobDetails/JobDetails';
import Companies from './components/Companies/Companies';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<Layout><Home /></Layout>} />
        <Route path="/job-details" element={<Layout><JobDetails /></Layout>} />
        <Route path="/companies" element={<Layout><Companies /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /> </Layout>} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
        <Route path="*" element={<Layout><Home /></Layout>} />
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
