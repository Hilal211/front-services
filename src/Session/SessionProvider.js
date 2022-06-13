import React, { useState, useEffect } from 'react';
import SessionContext from './SessionContext';
import { setCookie, getCookie, removeCookie } from '../cookies';
import { toast } from 'react-toastify';
import swal
 from 'sweetalert';
 import { useHistory } from 'react-router';
export default function SessionProvider({ children }) {
const history=useHistory();
  const [session, setValue] = useState({
    user: {
      access_token: getCookie('access_token'),
      role: getCookie('role')
    }
  });

  useEffect(() => {
    function initializeSession() {
      let id = getCookie('id');
      let token = getCookie('token');
      if (token) fetch(`https://localhost:3002/users/${id}`, {
        headers: {
          'oken': token
        }
      }).then(res => res.json()).then(res => {
        let user = { ...res.data, token };
        updateSession({ user });
      });
    }
    initializeSession();
  }, []);

  function updateSession(nextSession) {
    let value = typeof nextSession === "function" ?
      nextSession : prevSession => ({ ...prevSession, ...nextSession });
    setValue(value);
  }

  async function login({ email, password }) {

    // try to login
    let res = await fetch('http://localhost:3002/users/login', {
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    let result = await res.json();
    console.log("result is :", result);
    if (result.Token) {
      setCookie('token',result.Token);
      setCookie('isadmin',result.isAdmin);
      setCookie('id',result._id);
    } else {
      return swal("username or password is not correct ", " ", "warning");
    }
    swal(`Welcome ${result.userName}!`);
    history.push('/home')
    console.log(session)

  }

  function logout() {
    // updateSession({ user: { access_token: null } });
    removeCookie('id');
    removeCookie('token');
  }

  const context = {
    session,
    actions: {
      login,
      logout
    }
  }

  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  )
}