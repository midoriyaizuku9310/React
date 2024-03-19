import axios from "axios";

const productUrl = 'https://dummyjson.com/products';

// axios syntax 
// axios.get('url')
// .then((resp) => { handle response})
// .catch((err) => { handle error});

const getAllProducts = () => {
    console.log('getAllProducts');
    return axios.get(productUrl);
};

const getProductById = (productId) => {
    console.log(productId);
    return axios.get(`${productUrl}/${productId}`);
};

const addProduct = () => { };

// more functions 

export { getAllProducts, getProductById, addProduct };


// // option 1 to export multiple functions

// const getAllProducts = () => { };

// const getProductById = () => { };

// const addProduct = () => { };

// // more functions

// export { getAllProducts, getProductById, addProduct };

// // // option 2 to export multiple functions

// // export const getAllProducts = () => { };

// // export const getProductById = () => { };

// // export const addProduct = () => { };

// // // more functions 

