import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import Productlist from './components/pages/Productlist'
import Display from './components/pages/Display';
import Product from './components/pages/Product';

import AdminLoginPage from './components/pages/AdminLoginPage'
import AdminProducts from './components/admin/AdminProducts'
import AdminProduct from './components/admin/AdminProduct'


function App() {
  return (
    <div className="App">
     <Router>
         <Switch>
             <Route exact path="/">
                <Navbar/>
                <Home/>
             </Route>
              <Route path="/Login" >
                <Navbar/>
                <LoginPage/>
              </Route>
              <Route path="/register" >
                <Navbar/>
                <RegisterPage/>
              </Route> 
              <Route path="/forget-password">
                <Navbar/>
                <ForgetPasswordPage/>
              </Route>
              <Route path="/productlist">
                <Navbar/>
                <Productlist/>
              </Route> 
              <Route path="/displayinfo">
                <Navbar/>
              <Display/>
              </Route>

              <Route path="/AdminLogin" >
                <Navbar/>
                <AdminLoginPage/>
              </Route>

              <Route path="/AdminProducts" >
                <Navbar/>
                <AdminProducts/>
              </Route>
              <Route path="/AdminProduct" >
                <Navbar/>
                <AdminProduct/>
              </Route>
         </Switch>
     </Router>
    </div>
  );
}

export default App;
