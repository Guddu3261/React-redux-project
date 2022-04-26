import React from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
// import '../src/App.css'
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    
 <div className='App'>
 <Provider store={store}>
 <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
 </Provider>

       
 </div>
  )
}

export default App;