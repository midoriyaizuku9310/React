const ProductDetails = (props) => {

    console.log(props);
    // console.log(props.name)
    
    const childDatainChild="from child"
    const sendDataToParent = () => {
        
        props.childToParent(childDatainChild);
    }
    return (
        <div>
            <h1>Product Details (children)</h1>
            {/* <h4>{props.children}</h4> */}
            <p>parent data in child: {props.parent}</p>
            <p>child data in child: {childDatainChild}</p>
            <button onClick={sendDataToParent}>pass data to parent</button>
        </div>
    )
}

export default ProductDetails;