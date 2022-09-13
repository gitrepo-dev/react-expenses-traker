import './App.css';
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { ProtectedRouter, PublicRouter } from 'routers'
import Registration from 'components/registration';
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const Login = React.lazy(() => import('components/login'));


function App() {
  return (
    <>
      <Suspense fallback={<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}>
        <Routes>
          <Route element={<PublicRouter />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
          </Route>
          <Route element={<ProtectedRouter />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
