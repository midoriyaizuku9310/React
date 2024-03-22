
import { createSlice } from "@reduxjs/toolkit";

// const ProductSlice = '';

// const ProductSlice = createSlice({});

// const ProductSlice = createSlice({
//     name: '',
//     initialState: {},
//     reducers: {}
// });

// const ProductSlice = createSlice({
//     name: 'poductList',
//     initialState: {
//         poductListObj: [] // 'this is intial value'
//     },
//     reducers: {
//         // contain setter methods 
//         setProductListObj: () => { }
//     }
// });

console.log('ProductSlice');

const ProductSlice = createSlice({
    name: 'productList',
    initialState: {
        productListObj: [],
        anotherObject: []
    },
    reducers: {
        setProductListObj: (state, action) => {
            console.log(state);
            console.log(action);
            state.productListObj = action.payload; // data coming from the component 
        }
        // more methods as needed 
    }
});

export const { setProductListObj, /* more methods */ } = ProductSlice.actions;

export default ProductSlice.reducer;