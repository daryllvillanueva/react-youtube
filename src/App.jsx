import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home/Home"
import Shorts from "./components/pages/Video/Shorts"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
