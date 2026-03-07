import {Routes,Route}from 'react-router-dom'
import Productdetails from './pages/Productdetails'
import Products from './pages/Products'
import About from './pages/About'
import Home from './pages/home'
import Notfound from './pages/Notfound'
import Nav from './nav'
import './App.css'

function App() {

  return (
  <>
 <Nav/>
<Routes>
<Route path = '/'  element = {<Home/>}></Route>
<Route path = '/products' element={<Products/>}></Route>
<Route path = '/about' element={<About/>}></Route>
<Route path = '/products/:id' element ={<Productdetails/>}></Route>
<Route path ='*' element = {<Notfound/>} ></Route>

</Routes>
  
 
  </>
    )}

export default App
