import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Fashionstore from './pages/Fashionstore'
 import ProductDetails from './pages/Productdetails';
 import Urbanstore from './pages/Urbanstore'
function App() {
  return (
    <>
       <Router>
     <Routes>
     <Route path='/' element={<Home/>}> </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/fashion-forward' element={<Fashionstore/>}/>
         <Route path='/urban-store' element={<Urbanstore/>}/>
     </Routes>
        </Router>
    
    </>
  )
}

export default App