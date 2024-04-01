import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
function App() {
  

  return (
    <BrowserRouter> 
    <Navbar/>
    <Themes/>
    <Routes>
      <Route index element ={<Home/>} />
      <Route path='about' element ={<About/>} />
      <Route path='portfolio' element ={<Portfolio/>} />
      <Route path='contact' element ={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

/* 
<BrowserRouter>: This is a component provided by React Router that uses HTML5 history API to keep UI in sync 
with the URL. It's typically used as the root of your routing configuration.
<Routes>: This component is used to define the routes of your application. It's where you specify which component 
should render for each URL route.
<Route>: This component defines a mapping between a URL path and the component to render when the URL matches
 that path.
 index: This attribute indicates that this route should be rendered when the URL matches the root URL ("/"). 
 The element prop specifies the component to render, in this case, <Home/>
 path='about', path='portfolio', path='contact': These routes are mapped to specific paths 
 ("/about", "/portfolio", "/contact") and specify which component to render when the URL matches each path 
 (<About/>, <Portfolio/>, <Contact/> respectively).
*/