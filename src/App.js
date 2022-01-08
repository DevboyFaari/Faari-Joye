import React from 'react';
import Banner from './Component/Banner';
import About from './Component/About';
// import Service from './Component/Service';
// import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
// import Testimonial from './Component/Testimonial';
import Portfolio from './Component/Portfolio';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/Css/Responsive.css';
import Contactinf from './Component/Contactinf';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner/>
            <About/>
            {/* <Service/> */}
            <Portfolio/>
            
            
            {/* <Blog/> */}
            {/* <Contact/> */}
            <Contactinf/>
            <Footer/>
        </div>
    );
}

export default App;
