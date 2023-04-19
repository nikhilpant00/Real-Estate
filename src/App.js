import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import LoggedIn from "./pages/LoggedIn";
import Subscription from "./pages/Subscription";
import PrivateRoutes from "./private route/privateRoute";
import Auth from "./components/webauthn";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Landing isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        {/* <Route path="/login" element={<Login setIsLogin={setIsLogin} />} /> */}
        {/* <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/form" element={<Form />} />
        <Route path="/auth" element={<Auth setIsLogin={setIsLogin} />} />
        <Route element={<PrivateRoutes isLogin={isLogin} />}>
          <Route
            path="/loggedIn"
            element={<LoggedIn isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
        </Route>

        <Route
          path="/subscription"
          element={<Subscription isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
      </Routes>
    </>
  );
}

export default App;
