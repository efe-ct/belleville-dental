import Navbar from "./components/Navbar/Navbar.jsx";
import Research from './components/Research/Research.jsx';
import Education from './components/Education/Education.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
//Home page
import Hero from "./components/Hero/Hero.jsx";
import Gallery from './components/Gallery/Gallery.jsx';
import FAQContactUs from "./components/FAQContactUs/FAQContactUs.jsx";
//footer
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Products from "./components/Products/Products.jsx";
import ScrollToTop from "./helper/ScrollToTop.jsx";

const App = () => {
   return (
      <>
         <BrowserRouter>
         <ScrollToTop />
            <main className="c-pad">
               <Navbar />
               <Routes>
                  <Route path="/" element={<>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}   //same with motion.div in Products.jsx Research.jsx, App.jsx,  and Aboutus.jsx
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                     >
                        <Hero /><Gallery /><FAQContactUs />
                     </motion.div>
                  </>} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/aboutus" element={<Aboutus />} />
                  <Route path="/products" element={<Products />} />
               </Routes>
            </main>
            <Footer />
         </BrowserRouter>
      </>
   );
};

export default App
