
import { useState, useEffect } from "react";

import { getProductsWithPagination } from '../services/ProductService';
import { Link } from "react-router-dom";


const ProductPages = () => {

    const [products, setProducts] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        getProductsWithPagination(10, (currentPage - 1) * 10)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data.products);
                setTotalPages(response.data.total / 10);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [currentPage, totalPages]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    let array = [];
    const pages = (x) => {
        for (let i = 1; i <= x; i++) {

            array.push(i);
        }
    }

    pages(totalPages)
    console.log(array)


    return (
        <>
            {/* <h1>Product List </h1>
            {products &&
                products.map((product) => {
                    return (
                        <div key={product.id}>

                            <Link className="btn btn-outline-info" to={`/product-details/${product.id}`}>{product.title} </Link>

                        </div>
                    )
                })
            } */}

            <h1>Product Pages</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products && products.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100" style={{ width: '18rem' }}>
                            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-body">
                                <Link to={`/product-details/${product.id}`}>{product.title}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Page</button>
                <span>Page {currentPage} of {totalPages}</span>
                {/* <button onClick = {()=>pages(totalPages)}  */}


                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next Page</button>
            </div>
            <div>

                {array.map(page =>
                    <div className="btn-group" role="group" aria-label="Basic outlined example" key={page}>
                        <button key={page} className="btn btn-outline-primary" onClick={() => handlePageChange(page)} > {page}</button>

                    </div>)}
            </div>
        </>
    );
};
export default ProductPages;