import React, { useContext } from 'react';
import SessionContext from './Session/SessionContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './User/NavBar/NavBar';
import HomePage from './User/HomePage/HomePage';
import Footer from './User/Footer/Footer';
import PostsPage from './User/PostsPage/PostsPage';
import BlogDetails from './User/BlogDetails/BlogDetails';
import OfferPage from './ServiceProvider/OfferPage/OfferPage';
import AddOffer from './ServiceProvider/AddOffer/AddOffer';
import ServiceProviderPage from './User/ServiceProviderPage/ServiceProviderPage';
import UserDetails from './User/UserDetails/UserDetails';
import Contact from './User/Contact/Contact';
import EditOffer from './ServiceProvider/EditOffer/EditOffer';
import Rating from './User/Rating/Rating';
import ProfileSp from './ServiceProvider/ProfileSp/ProfileSp';
import SideNav from './component/SideNav/SideNav';
import Login from './Login/Login';
import Register from './Register/Register';
import { getCookie } from './cookies';
import About from './User/About/About';

export default function Routes() {
  // const {session:{user:{token}}}=useContext(SessionContext)
  const token = getCookie('token')
  return (
    <Switch>


      <PublicRoute exact path="/home" component={HomePage} />
      <PublicRoute exact path="/offers" component={PostsPage} />
      <PublicRoute exact path="/offerdetail/:id" component={BlogDetails} />
      <PublicRoute exact path="/serviceprovider" component={ServiceProviderPage} />
      <PublicRoute exact path="/serviceproviderdetails/:id" component={UserDetails} />
      <PublicRoute exact path="/contact" component={Contact} />
      <PublicRoute exact path="/rating/:id" component={Rating} />
      <PublicRoute exact path="/dashboard" component={SideNav} />
      <PublicRoute exact path="/login" component={Login} token={token} />
      <PublicRoute exact path="/register" component={Register} />
      <PublicRoute exact path="/about" component={About} />

      <Route exact path="/addoffer" component={AddOffer} token={token} />
      <Route exact path="/editoffer/:id" component={EditOffer} token={token} />
      <Route exact path="/profile" component={ProfileSp} token={token} />
      <Route exact path="/myoffer" component={OfferPage} token={token} />


    </Switch>



  );


  function PublicRoute({ path, component: Component, token, ...props }) {
    return (
      <>
        <Route
          {...props}
          path={path}
          render={(props) =>
            token ? <Redirect to="/home" /> : <Component {...props} />
          }
        />
      </>
    );
  }

  function PrivateRoute({ path, component: Component, token, role, ...props }) {
    return (
      <Route
        {...props}
        path={path}
        render={(props) => {
          let redirectTo = null;
          if (!token)
            return (
              <Redirect to={'/login'} />

            )
          //   return <Redirect to={path} />;


        }}
      />
    );
  }
}
