////import Home from "./pages/home/Home";
////import Register from "./pages/register/Register";
//import Login from "./pages/login/Login";
////import Profile from "./pages/profile/Profile";
//
//function App() {
//  return(
//      <div id = "app">
//
//          <>
//
//
//               <Login/>;
//          </>
//
//
//      </div>
//  )
//
//
//}
//
//export default App;
//

//<Route path="/" element={<Home />} />
//              <Route path="/Register" element={<Register />} />
//              <Route path="/Login" element={<Login />} />
//              <Route path="/Profile" element={<Profile />} />

//<Routes>
//
//          <Route exact path="/">
//                  {user ? <Home /> : <Register />}
//            </Route>
//            <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
//            <Route path="/register">
//              {user ? <Navigate to="/" /> : <Register />}
//            </Route>
//            <Route path="/profile/:username">
//              <Profile />
//            </Route


//log in auth

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import {

 BrowserRouter as Router,

  Route,
  Routes,
  Navigate,
  Outlet,


} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({user, redirectPath='/landing'}) =>{


    if(!user) {

        return <Navigate to={redirectPath} replace />;

    }

    return <Outlet />;


};

function App() {

const { user } = useContext(AuthContext);

  return (

  <Router>


        <Routes>



            <Route element={<ProtectedRoute user={user}/>}>










            </Route>



            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />}/>











        </Routes>
























  </Router>



























  );
};

export default App;