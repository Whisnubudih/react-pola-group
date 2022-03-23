import './App.css'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectRoute';

import Login from './Views/Login.js'
import Register from './Views/Register';
import Home from './Views/Home'
import FormAdd from './Views/FormAdd'




function App (){
  return (
    <div className='App'>
    <Routes>
    {/* <Route path="/" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } /> */}
     <Route path="/" element={<Home/>} /> 
     <Route path="/FormAdd" element={<FormAdd/>} />        
    {/* <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} /> */}
    </Routes>
    </div>
  )
}

export default App;
