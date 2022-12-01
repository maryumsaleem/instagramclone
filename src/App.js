//import logo from './logo.svg';
 
import './App.css';
import Home from './Components/HomePage/Home';
import {Route,Switch,Routes} from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route exact path="/home" element={<LoginPage/>}></Route>

        {/* <Route path='/' element={<Contact/>} />
        <Route path='/contact/name' element={<Name/>} />
        <Route path='/*' element={<Error/>} /> */}
 </Routes>
      {/* <LoginPage/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
