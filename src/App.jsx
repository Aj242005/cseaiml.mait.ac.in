import Navbar from "./components/Navbar"
import { Home } from "./components/pages/Home";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'


const locomotiveScroll = new LocomotiveScroll({
  smooth : true,
});


function App() {
  return (<>
    <div className="overflow-hidden main" >
      <div className="shadow-xl shadow-cyan-500/50" >
        <Navbar className='' />

      </div>
      <div className=" overflow-hidden relative h-full w-screen  " >
        <Home className=' relative bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-800' />
      </div>
    </div>
  </>
  )
}

export default App;