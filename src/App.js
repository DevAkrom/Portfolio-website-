import AboutUs from './components/aboutUs.js'
import GlobalStyles from './components/globalSty;es'
import Nav from './nav.js'
import Work from './work/work.js'
import ContactUs from './ContactUs/contact.js'
import MovieDetail from './movieDetail.js'
import ScrollToTop from './scrollToTop.js'


// !!! Animate 
import { AnimatePresence } from 'framer-motion'

// !!! ROUTER
  import {useLocation, Route, Routes} from 'react-router-dom'


export default function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Nav/>
      <GlobalStyles/>
      <ScrollToTop/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}> 
          <Route path='/' element={<AboutUs/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='work' element={<Work/>} />
          <Route path='work/:id' element={<MovieDetail/>} />
          <Route path='contact' element={<ContactUs/>}/>
        </Routes>
      </AnimatePresence>
      
    </div>
  );
}

