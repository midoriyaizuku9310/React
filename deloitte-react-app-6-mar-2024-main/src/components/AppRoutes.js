import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import MenuBar from "./MenuBar";
import Page404 from "./Page404";
import CompConcepts from "./CompConcepts";


const AppRoutes = () => {
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
                            <Route path='' element={<Home/>}/>
                            <Route path='*' element={<Page404 />} />

                        </Routes>
                    </div>
                </BrowserRouter>
            </>
        </>
    )
}

export default AppRoutes;