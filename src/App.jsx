import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Services from './pages/services/Services'
import Language from './pages/Languages/Language';
import Work from './pages/Work wit us/Work';
import Clientele from './pages/Clientele/Clientele'
import Dubbing from './pages/services/ServiceRoutedPage/Dubbing';
import Voiceover from './pages/services/ServiceRoutedPage/Voiceover';
import Localization from './pages/services/ServiceRoutedPage/Localization';
import Audioediting from './pages/services/ServiceRoutedPage/Audioedit';
import Mtp from './pages/services/ServiceRoutedPage/Mtpe';
import Content from './pages/services/ServiceRoutedPage/Cr';
import Transcrip from './pages/services/ServiceRoutedPage/Trascrip';
import Translate from './pages/services/ServiceRoutedPage/Translation';
import Proofreading from './pages/services/ServiceRoutedPage/Pr';
import Audiodesc from './pages/services/ServiceRoutedPage/Audiodesc';
import Subtitle from './pages/services/ServiceRoutedPage/Subtitle';
import Ccaption from './pages/services/ServiceRoutedPage/Ccaption';


import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/Scrolltotop';
import BlogSection from './pages/Home/BlogSection';
import BlogDetails from './components/BlogDetails';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/language' element={<Language/>}></Route>
        <Route exact path='/work-with-us' element={<Work/>}></Route>
        <Route exact path='/clientele' element={<Clientele/>}></Route>
        <Route exact path='/blog' element={<BlogSection/>}></Route>

        CLIENTELE

        
        {/* Services Routes */}
        <Route exact path='/services/dubbing' element={<Dubbing/>}/>
        <Route exact path='/services/voiceover' element={<Voiceover/>}/>
        <Route exact path='/services/localization' element={<Localization/>}/>
        <Route exact path='/services/audioedit' element={<Audioediting/>}/>
        <Route exact path='/services/translation' element={<Translate/>}/>
        <Route exact path='/services/transcription' element={<Transcrip/>}/>
        <Route exact path='/services/subtitle' element={<Subtitle/>}/>
        <Route exact path='/services/closed-caption' element={<Ccaption/>}/>
        <Route exact path='/services/mtpe' element={<Mtp/>}/>
        <Route exact path='/services/proofreading' element={<Proofreading/>}/>
        <Route exact path='/services/content-writing' element={<Content/>}/>
        <Route exact path='/services/audiodescription' element={<Audiodesc/>}/>

      </Routes>

      <Routes>
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
    
      <Footer />
    </Router>
  )
}

export default App;