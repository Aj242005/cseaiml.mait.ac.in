import Navbar from "./components/Navbar"
import { Home } from "./components/pages/Home";
import './App.css'
function App() {
  return (<>
    <div className="overflow-hidden" >
      <div className="shadow-xl shadow-cyan-500/50" >
        <Navbar className='' />

      </div>
      <div className=" overflow-hidden relative h-150 w-screen  " >
        <Home className=' relative bg-linear-to-t from-sky-500 to-indigo-500' />
      </div>
    </div>
  </>
  )
}

export default App;