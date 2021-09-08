import React from "react";
import "./App.css";
import { useContext } from "react";
import BrandContext from "./componets/context/BrandContext";

function About () {
  const { About } = useContext(BrandContext);
  return (
    <header>
      <h1>{About}</h1>
      <p>Test test</p>
    </header>
  );
};

// function About() {
//   const { About } = useContext(BrandContext);
//   return (
//     <div>
//       <h1>{About}</h1>
//       <p>Hello React </p>
//     </div>
//   );

//   //react routes for other page
// }
export default About;
