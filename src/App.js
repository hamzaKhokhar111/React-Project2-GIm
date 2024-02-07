import React from "react";
import './App.css'
import Hero from "./component/Hero";
import Programs from "./programs/Programs";
import Reason from "./reasons/Reason";
import Plan from "./component/PLAN/Plan";
import Join from "./component/join/Join";
import Footer from "./component/footer/Footer";


function App() {
  return (
   <>
   <Hero/>
   <Programs/>
   <Reason/>
   <Plan/>
   <Join/>
   <Footer/>
   
    </>
  );
}

export default App;
