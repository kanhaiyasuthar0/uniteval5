
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EmployeesCreate from './components/Employees/EmployeesCreate';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import Register from './components/register/Register';
import Navbar from './components/Navbar';
import EmployeesDetails from './components/Employees/EmployeesDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<EmployeesCreate/>}></Route>
          <Route path='/employee' element={<Employees/>}></Route>
          <Route path='/employee/:id' element={<EmployeesDetails/>}></Route>
          <Route path='/employeecreate' element={<Register/>}></Route>


      </Routes>
      
     
    </div>
  );
}

export default App;
