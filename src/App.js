import logo from './logo.svg';
import './App.css';
import './index.css'
import {Home} from './Home'
import { Component } from 'react';
import { About } from './About';
import { Services } from './Services';
import { Contact } from './contact';
import { Port } from './port';
import { Testimonials } from './Testmonials';
import { Example } from './Example';
import { Footer } from './Footer';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.css';





export class App extends Component{

  render (){

    return(
      <>
      
      <Home />
      <About />
      <Services />
      <Contact />
      <Port />
      <Testimonials />
      <Example />
      <Footer />
      </>
    )
  }
}
export default App;