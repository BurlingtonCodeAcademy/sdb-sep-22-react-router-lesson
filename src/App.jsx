import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import NotFound from './components/404';

/* 
  React Router Steps

  1. Install react router DOM [ npm i react-router-dom@6 ]
  2. Import BrowserRouter and Routes from "react-router-dom"

  BrowserRouter is a wrapper encompassing all components in a routing system

  Routes (formerly Switch v5 & below) declare where each dynamic component will belong

  Route - an individual route specifying component to be rendered when hit.
*/

function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/' element={ <Home /> }/>
        <Route path='about/:username' element={ <AboutMe /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/mainroute'>
          <Route path='subroute' element={"Subroute hit"} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
