import "./App.css";
import { Section1 } from "./Section/Section1/Section1";
import { Section2 } from "./Section/Section2/Section2";
import { Section3 } from "./Section/Section3/Section3";
import { Section4 } from "./Section/Section4/Section4";
import { Seccion5 } from "./Section/Seccion5/index.jsx";
import Footer from "./Footer/footer";


function App() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Seccion5 />
      <Footer />  

    </div>
  );
}

export default App;

