import './CSS/App.css';
import Menu from './Components/Menu'
import MyWork from './Components/MyWork'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route index element={<AboutMe/>} />
          <Route path="MyWork" element={<MyWork/>}/>
          <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
