import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import Login from '../components/form/Login';
import Register from '../components/form/Register';
import Forgotpassword from '../components/form/Forgrt';
import Google from '../components/form/Google';
import Payment from '../components/form/Payment';
import Succesfull from '../components/form/pay_succ';
import AddUser from "../users/AddUser";
import EditUser from "../users/EditUser";
import ViewUser from "../users/ViewUser";
import Data from '../pages/Data';
function RouterRoutes() {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data" element={<Data />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetpassword" element={<Forgotpassword />} />
                <Route path="/google" element={<Google />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/succes" element={<Succesfull />} />
                <Route exact path="/adduser" element={<AddUser />} />
                <Route exact path="/edituser/:id" element={<EditUser />} />
                <Route exact path="/viewuser/:id" element={<ViewUser />} />
            </Routes>
        </>
    );
}

export default RouterRoutes;