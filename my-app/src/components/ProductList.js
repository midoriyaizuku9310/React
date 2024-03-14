import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';


const ProductList = () => {

    // const products =  [];
    // const [products, setProducts] = useState([]);
    // const [cart,setCart] = useState([]);


    // useEffect (() => {
    //     fetch('https://dummyjson.com/products')
    //     .then((response) => response.json())
    //   .then((data) => {

    //     setProducts(data.products);
    //     console.log('hello')
    //     console.log(data.products);

    //   })

    // },[])

    // let products = [];

    // fetch('https://dummyjson.com/products')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data.products); 
    //         products = data.products;
    //     }).catch((error) => {
    //         console.log(error)
    //     })

const parentDatainParent ='from parent'
const [childDataInParent, setChildDataInParent] = useState('');
 
const  getDataFromChild = (children) =>  {
 setChildDataInParent(children)
}

    return (
        <>
            <h1>List of products (parent)</h1>
            {/* <ul>
            {products.map((product) =>(
                <li key={product.id}>{product.title}</li>
            ))}
            </ul> */}
            {/* <p>{products.length}</p> */}
            {/* <ProductDetails name="danish" /> */}
            {/* <ProductDetails>
                Danish
            </ProductDetails> */}
            <p>parent data in parent: {parentDatainParent}</p>
            <p>child data in parent:{childDataInParent}</p>
            <ProductDetails parent={parentDatainParent}  childToParent={getDataFromChild}/>
            {/* <ProductDetails /> */}
            
        </>
    )

}

export default ProductList;

