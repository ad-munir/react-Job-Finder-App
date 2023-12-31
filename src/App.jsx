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
import RegistrationForm from './components/Auth/RegistrationForm';
import LoginForm from './components/Auth/LoginForm';
import UserProvider from './Contexts/Contexts'
import Jobs from './components/Jobs/Jobs';
import data from './data';
import AddOffer from './components/AddOffer/AddOffer';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import { useEffect } from 'react';
import { getAuthToken } from './Service/AuthHelper';
function App() {

  useEffect(() => {
      console.log(getAuthToken());
    }, [])

  return (

    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Layout><Home /></Layout>} />
          <Route path="/job-details" element={<Layout><JobDetails /></Layout>} />
          <Route path="/companies" element={<Layout><Companies /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/jobs" element={<Layout><Jobs data={data} /></Layout>} />
          <Route path="/create-employer-account" element={<Layout><RegisterCompany /></Layout>} />
          {/* <Route path="/new-offer" element={<Layout><AddOffer /></Layout>} /> */}
          <Route path="/new-offer" element={<Layout ><AddOffer /></Layout>} />
          
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/sign-up" element={<RegistrationForm />} />
          <Route path="/sign-in" element={<LoginForm />} />

          <Route path="*" element={<Layout><Home /></Layout>} />
          <Route path='/dd' element={<Test />} />
        </Routes>
      </Router>
    </UserProvider>
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
