import '../styles/App.css'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Cursor from './Cursor';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <Banner />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
