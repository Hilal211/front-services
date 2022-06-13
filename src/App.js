import { withRouter } from 'react-router-dom';
import SessionProvider from './Session/SessionProvider';
import Routes from './Router';
import Navbar from './User/NavBar/NavBar';
import Footer from './User/Footer/Footer';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import GoUp from './component/GoUp';
function App() {
  const location = useLocation();
  const [bool, setBool] = useState(true);
 let loc=location.pathname;

  useEffect(() => {
    if(location.pathname == '/login' || location.pathname == '/register') {
      setBool(false)
    }
    else{
      setBool(true)
    }
  }, [loc])


  return (
    <div className="app">
      <SessionProvider>
        {bool ? <Navbar /> : null}
        <Routes />
        {bool ? <GoUp /> : null}
        {bool ? <Footer /> : null}
      </SessionProvider>
    </div>)



}

export default withRouter(App);