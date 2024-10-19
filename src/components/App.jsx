import '../styles/App.css'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Services />
    </div>
  );
}

export default App;
