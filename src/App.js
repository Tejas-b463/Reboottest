import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About"
import Product from "./components/Product";
import Video from "./components/Video";
import Athletes from "./components/Athletes";
import Footer from "./components/Footer";
import Events from "./components/Events"

function App() {
  return (
   <div>
   <Navbar/>
   <Home/>
   <About/>
   <Product/>
   <Video/>
   <Athletes/>
   <Events/>
   <Footer/>
   </div>
  );
}

export default App;
