import React, { createContext, useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { User } from './Models';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import PrivateRoutePage from './PrivateRoutePage';
import CurrentUserContext from './Store/userStore';

function App() {
  const [getCurrentUser, setCurrentUser] = useState<User | null>(null);
  console.log(getCurrentUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser: getCurrentUser, dispatch: setCurrentUser }}>
      <Routes>
        <Route path='/'
          element={
            <PrivateRoutePage >
              <HomePage />
            </PrivateRoutePage>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home'
          element={
            <PrivateRoutePage >
              <HomePage />
            </PrivateRoutePage>
          } />
        <Route path='*'
          element={
            <PrivateRoutePage >
              <HomePage />
            </PrivateRoutePage>
          } />
      </Routes>

    </CurrentUserContext.Provider>

  );
}

export default App;
