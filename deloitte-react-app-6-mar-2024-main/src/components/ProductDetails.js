import { useEffect, useState } from "react";
import { getProductById } from "../services/ProductService";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const productParam = useParams();

    const [product, setProduct] = useState('');
    const [errorMessage, serErrorMessage] = useState('');

    useEffect(() => {
        console.log(productParam.productId);
        getProductById(productParam.productId)
            .then((response) => {
                console.log(response);
                setProduct(response.data);
                serErrorMessage('');
            })
            .catch((error) => {
                console.log(error);
                serErrorMessage(error.response.data.message);
                setProduct('');
            });
    }, []);

    return (
        <>
            <p className="mt-3 display-5 text-primary">Product Details</p>
            {product &&
                <div className="border border-secondary shadow rounded px-2 py-2" >
                    <h2>{product.title}</h2>
                    <p>{product.description} {product.description}</p>
                    <p>MRP ₹{product.price}/-</p>
                    <p>Discount {product.discountPercentage}%</p>
                    {/* // create and use  calc function below   */}
                    <p>Effective Price ₹{product.price - (product.price * (product.discountPercentage) / 100)}/-</p>
                    <img width={'25%'} src={product.thumbnail} alt="product thumbnail" />
                </div>
            }
            <div> {errorMessage &&
                <p> {errorMessage} </p>
            }
            </div>
        </>
    );
}

export default ProductDetails;

// import { useState } from "react";
// import { getProductById } from "../services/ProductService";

// const ProductDetails = () => {

//     const [productId, setProductId] = useState('');
//     const [product, setProduct] = useState('');
//     const [errorMessage, serErrorMessage] = useState('');

//     const handleProductIdInput = (evt) => {
//         console.log(evt.target.value);
//         setProductId(evt.target.value);
//         evt.preventDefault();
//     };

//     const searchProductById = (evt) => {
//         evt.preventDefault();
//         console.log(productId);
//         getProductById(productId)
//             .then((response) => {
//                 console.log(response);
//                 setProduct(response.data);
//                 serErrorMessage('');
//             })
//             .catch((error) => {
//                 console.log(error);
//                 serErrorMessage(error.response.data.message);
//                 setProduct('');
//             });
//         setProductId('');
//     };

//     return (
//         <>
//             <p className="display-5 text-primary">Product Details</p>
//             <div>
//                 <form onSubmit={searchProductById}>
//                     <input
//                         type="number"
//                         name="productId"
//                         value={productId}
//                         onChange={handleProductIdInput}
//                         placeholder="Enter product id"
//                         autoFocus
//                         required
//                     />
//                     <input
//                         type="submit"
//                         value="Search"
//                     />
//                 </form>
//             </div>
//             {product &&
//                 <div className="mx-3 my-3 px-3 py-3 shadow rounded" >
//                     <h2>{product.title}</h2>
//                     <p>{product.description} {product.description}</p>
//                     <p>{product.price}</p>
//                     <img width={'25%'} src={product.thumbnail} alt="product thumbnail" />
//                 </div>
//             }
//             <div> {errorMessage &&
//                 <p> {errorMessage} </p>
//             }
//             </div>
//         </>
//     );
// }

// export default ProductDetails;


// import PropTypes from 'react'

// const ProductDetails = (props) => {
//     const childData = 'Monu';
//     const parentDataInChild = props.parentToChild;
//     const sendDataToParent = () => {
//         console.log(childData);
//         props.childToParent(childData);
//     };
//     return (
//         <>
//             <h1>Product Details - Child Component </h1>
//             <p>Parent data in child component: {parentDataInChild}</p>
//             <p>Child data in child component: {childData}</p>
//             <button onClick={sendDataToParent}>Pass Data to Parent</button>
//         </>
//     );

//     ProductDetails.propTypes = {
//         parentToChild: PropTypes.string.isRequired,
//         // anotherField: PropTypes.number.isRequired,
//         // yetAnotherFiend: PropTypes.object.isRequired
//     };

//     ProductDetails.defaultTypes = {
//         parentToChild: 'Tonu'
//     };

// }
// export default ProductDetails;


// const ProductDetails = (props) => {

//     console.log(props);
//     console.log(props.firstName);

//     return (
//         <>
//             <h1>ProductDetails Component</h1>
//             <p> {props.firstName} {props.lastName} </p>
//             <p>{props.children}</p>
//         </>
//     );
// }
// export default ProductDetails;

// const ProductDetails = (props) => {

//     console.log(props);
//     console.log(props.firstName);

//     return (
//         <>
//             <h1>ProductDetails Component</h1>
//             <p> {props.firstName} {props.lastName} </p>
//         </>
//     );
// }
// export default ProductDetails;

