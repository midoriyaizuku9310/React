import { BrowserRouter, Route, Routes,Router } from "react-router-dom";

import React, { useState } from 'react';
import Home from "./Home";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import MenuBar from "./MenuBar";
import Page404 from "./Page404";
import CompConcepts from "./CompConcepts";
import ProductPages from "./ProductPages";
import Appointments from "./appointments";
import Payment from "./Payment";
import BookingData from "./bookings";

const AppRoutes = () => {
    const [paymentComplete, setPaymentComplete] = useState(false);

    const handlePaymentComplete = () => {
      setPaymentComplete(true);
    };
    return (
        <>
            <p>this is routing component</p>
            <>
                <BrowserRouter>
                    <>
                        <MenuBar />
                    </>
                    <div className='container'>
                        <Routes>
                            <Route exact path='learning' element={<CompConcepts />} />

                            <Route exact path='home' element={<Home />} />
                            <Route exact path='login' element={<Login />} />
                            <Route exact path='product-list' element={<ProductList />} />
                            <Route exact path='product-details' element={<ProductDetails />} />
                            <Route exact path='product-details/:productId' element={<ProductDetails />} />
                            <Route exact path='product-pages' element={<ProductPages />} />
                            <Route path='' element={<Home />} />
                            <Route path='*' element={<Page404 />} />
                            
                                    <Route path="payment" element={<Payment />} />
                                    <Route exact path='appointment' element={<Appointments />} />
                                    <Route exact path='bookings' element={<BookingData />} />
                               
                        </Routes>
                    </div>
                </BrowserRouter>
            </>
        </>
    )
}

export default AppRoutes;