import React, {createContext, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NoMatchPage from "../pages/NoMatchPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Admin from "../Dashboard/Admin/Admin";
import AddService from "../Dashboard/AddService/AddService";
import OrderList from "../Dashboard/OrderList/OrderList";
import ManageService from "../Dashboard/ManageService/ManageService";
import MakeAdmin from "../Dashboard/MakeAdmin/MakeAdmin";
import Book from "../Dashboard/Book/Book";
import BookingList from "../Dashboard/BookingList/BookingList";
import Review from "../Dashboard/Review/Review";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Testimonial";
import ContactPage from "../pages/ContactPage";

export const userContext = createContext();

const AppRoute = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
           <Switch>
               <Route>
                   <Route exact path="/" component={HomePage} />
                   <Route exact path="/noMatch" component={NoMatchPage} />
                   <Route exact path="/login" component={LoginPage} />
                   <Route exact path="/contact" component={ContactPage} />
                   <Route exact path="/service">
                       <TopNavigation/>
                       <Services/>
                       <Footer/>
                   </Route>
                   <Route exact path="/reviews">
                       <TopNavigation/>
                      <Testimonial/>
                       <Footer/>
                   </Route>
                   <PrivateRoute exat path="/book/:id">
                       <Admin/>
                       <Book/>
                   </PrivateRoute>
                   <PrivateRoute exat path="/admin">
                       <Admin/>
                   </PrivateRoute>
                   <Route exat path="/orderList">
                       <Admin/>
                       <OrderList/>
                   </Route>
                   <Route exat path="/addService">
                       <Admin/>
                       <AddService/>
                   </Route>
                   <Route exat path="/makeAdmin">
                       <Admin/>
                       <MakeAdmin/>
                   </Route>
                   <Route exat path="/manageService">
                       <Admin/>
                       <ManageService/>
                   </Route>
                   <Route exat path="/bookingList">
                       <Admin/>
                       <BookingList/>
                   </Route>
                   <Route exat path="/review">
                       <Admin/>
                       <Review/>
                   </Route>
               </Route>
           </Switch>
        </userContext.Provider>
    );
};

export default AppRoute;