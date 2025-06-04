import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
// import ProductDetails from './pages/Productdetails';
function App() {
  return (
    <>
       <Router>
     <Routes>
     <Route path='/' element={<Home/>}> </Route>
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
     </Routes>
        </Router>
    
    </>
  )
}

export default App