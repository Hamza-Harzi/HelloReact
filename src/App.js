 import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import Data from "./components/Data";


// import {Button} from 'react-bootstrap'



function App() {
  return (
    <>
      <Header  />
    <Cards  />
   <Forms  />
   <Data />

   <Footer />
    
    </>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1> Hello Imen</h1>
//   }
// }

export default App;
