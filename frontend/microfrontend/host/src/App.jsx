// import React from "react";

// import "./index.css";

// const App = () => (
//   <div className="container">
//     <div>Name: host</div>
//     <div>Framework: react</div>
//     <div>Language: JavaScript</div>
//     <div>CSS: Empty CSS</div>
//   </div>
// );

// export default App;

import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


const Login = lazy(() => import('auth/Login').catch(() => {
  return { default: () => <div className='error'>Component Login is not available!</div> };
})
);

const Register = lazy(() => import('auth/Register').catch(() => {
  return { default: () => <div className='error'>Component Register is not available!</div> };
})
);


import Footer from "./components/Footer";
import Header from "./components/Header";

// import Main from "./Main";

// import PopupWithForm from "./PopupWithForm";
// import ImagePopup from "./ImagePopup";
// import api from "../utils/api";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import EditProfilePopup from "./EditProfilePopup";
// import EditAvatarPopup from "./EditAvatarPopup";
// import AddPlacePopup from "./AddPlacePopup";
// import Register from "./Register";
// import Login from "./Login";
// import InfoTooltip from "./InfoTooltip";
// import ProtectedRoute from "./ProtectedRoute";
// import * as auth from "../utils/auth.js";



function App() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onSignOut() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    navigate("/signin");
  }

  function onRegister(success) {
    if(success){
      navigate("/signin");
      //setTooltipStatus("success");
      //setIsInfoToolTipOpen(true);
    }else{
    // setTooltipStatus("fail");
    // setIsInfoToolTipOpen(true);
    }
    
  }

  function onLogin( email) {
    navigate("/");
    if(!!email){
      setEmail(email);
      setIsLoggedIn(isLoggedIn);
    }else{
      setEmail('');
      setIsLoggedIn(false);
   
    }        
  }



  return (

    <div className="page__content">
      <Header email={email} onSignOut={onSignOut} />
      <Routes>
        <Route path ="/" ></Route>
        <Route path="/signup" element={ <Suspense><Register onRegisterSuccess={onRegister} /></Suspense>}>

        </Route>
        <Route path="/signin" element={<Suspense><Login onLoginSuccess={onLogin} /></Suspense>}>

        </Route>
      </Routes>
      <Footer />

    </div>

  );
}



export default App;
