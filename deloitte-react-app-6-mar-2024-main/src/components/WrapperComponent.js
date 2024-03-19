const WrapperComponent =({children}) => {

    return (
        <div style={{color: 'white', backgroundColor:'#94bbe9'}}>
            {/* <p>from Wrapper Component</p> */}
            {children}
        </div>
    );
}

export default WrapperComponent;