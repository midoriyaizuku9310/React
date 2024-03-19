import { useState } from "react";
import { getProductById } from "../services/ProductService";
import WrapperComponent from "./WrapperComponent";

const ProductDetails = () => {

    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState('');
    const [errorMessage, serErrorMessage] = useState('');

    const handleProductIdInput = (evt) => {
        console.log(evt.target.value);
        setProductId(evt.target.value);
        evt.preventDefault();
    };

    const searchProductById = (evt) => {
        evt.preventDefault();
        console.log(productId);
        getProductById(productId)
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
        setProductId('');
    };

    return (
        <>
            <p className='display-5 text-primary'>Product Details - Child Component </p>
            <div>
                <form onSubmit={searchProductById}>
                    <input
                        type="number"
                        name="productId"
                        value={productId}
                        onChange={handleProductIdInput}
                        placeholder="Enter product id"
                        autoFocus
                        required
                    />
                    <input
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>
            {product &&
                <div className="mx-3 my-3 px-3 py-3 shadow rounded">
                    {/* <WrapperComponent> */}
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>

                    <img width={'25%'} src={product.thumbnail} alt="product thumbnail" />
                    {/* </WrapperComponent> */}
                </div>

                // <div class="card" >
                //     <img src={product.thumbnail} width="50%" class="card-img-top" alt="..."/>
                //         <div class="card-body">
                //             <h2 class="card-text">{product.title}</h2>
                //             <p class="card-text">{product.description}</p>
                //             <p class="card-text">{product.price}</p>
                //         </div>
                // </div>
            }
            <div> {errorMessage &&
                <p> {errorMessage} </p>
            }
            </div>
        </>
    );
}

export default ProductDetails;


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


