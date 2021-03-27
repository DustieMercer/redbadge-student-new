import React from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="container">
      <p>Hi from App.tsx</p>
      <Header />
      <Footer />
      <MainPage />
    
    </div>
  );
}

export default App;
