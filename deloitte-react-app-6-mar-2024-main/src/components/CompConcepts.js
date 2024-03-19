import ThemeContext from "./context/ThemeButton";
import ThemeButton from "./context/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedComponent from "./context/ThemedComponent";

// uncontrolled component 
const CompConcepts = () => {

    return (
        <>
            <h1>Context API Concepts</h1>
            <ThemeProvider>
                <p>here we should be able to change the theme</p>
                <ThemedComponent/>
                <ThemeButton/>
                
            </ThemeProvider>
           
        </>
    );
}

export default CompConcepts;








// import WrapperComponent from "./WrapperComponent";
// import Life from "./LifeCycle";
// import BootStrapLearning from "./BootStrapLearning";

// // uncontrolled component 
// const CompConcepts = () => {

//     return (
//         <>
//             <h1>Wrapper Component Concept</h1>
//             {/* <WrapperComponent>
//                 <h1>Wrapper</h1>
//                 <p>this is an example of wrapper component</p>    
//             </WrapperComponent> */}
//             {/* <Life /> */}
//             <BootStrapLearning />
//         </>
//     );
// }

// export default CompConcepts;





// import { useState } from "react";

// // controlled component 
// const CompConcepts = () => {

//     const [productId, setProductId] = useState('');

//     const handleProductIdInput = (evt) => {
//         setProductId(evt.target.value);
//         console.log(productId);
//     };

//     return (
//         <>
//             <h1>Component Concepts</h1>
//             <div>
//                 <input
//                     type="text"
//                     name="productId"
//                     value={productId}
//                     onChange={handleProductIdInput}
//                     placeholder="Enter product id"
//                     autoFocus
//                     required
//                 />
//             </div>
//             {productId &&
//                 <div>
//                     <p>{productId}</p>
//                 </div>
//             }
//         </>
//     );
// }

// export default CompConcepts;

// import { useRef } from "react";

// // uncontrolled component 
// const CompConcepts = () => {

//     const inputRef = useRef('');

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         const productId = inputRef.current.value;
//         console.log(productId);
//     };

//     return (
//         <>
//             <h1>Component Concepts</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input
//                         type="text"
//                         name="productId"
//                         ref={inputRef}
//                         placeholder="Enter product id"
//                         autoFocus
//                         required
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </>
//     );
// }

// export default CompConcepts;