
import NavBar from "./Components/NavBar/Navbar.jsx";
import { Section1 } from "./Components/Section1/Section1";
import { Section2 } from "./Components/Section2/Section2";
import { Section3 } from "./Components/Section3/Section3";
import { Section4 } from "./Components/Section4/Section4";
import { Seccion5 } from "./Components/Seccion5/index.jsx";
import Footer from "./Components/Footer/footer";


function App() {
  return (

    <div>
      <NavBar/>
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

