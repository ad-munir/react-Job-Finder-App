// import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Value from './components/Value/Value';
import Job from './components/Job/Job';

function App() {

  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  )
}

export default App
