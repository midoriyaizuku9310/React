const WrapperComponent =({children}) => {

    return (
        <div  className= 'display6 text-dark'>
            {/* <p>from Wrapper Component</p> */}
            {children}
        </div>
    );
}

export default WrapperComponent;