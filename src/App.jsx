import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import ProjectsGallary from './pages/ProjectsGallary'
import ProjectPageLoader from './pages/ProjectPageLoader'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Header />
      <div className='main-container'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projects-gallary' element={<ProjectsGallary/>} />
          <Route exact path='/projects/:projectName' element={<ProjectPageLoader />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
