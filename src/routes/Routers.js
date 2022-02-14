// import React-router-dom
import {Routes,Route} from 'react-router-dom'

// import home
import Home from '../components/homePage/home';
import Signup from '../components/signup/signup';
export default function Routers (){
    return (
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/signup' element={<Signup />} />
     </Routes>
    )
}