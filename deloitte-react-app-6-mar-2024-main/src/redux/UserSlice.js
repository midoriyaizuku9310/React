import { createSlice } from "@reduxjs/toolkit";

console.log('userSlice');

const UserSlice = createSlice({
    name: 'userList',
    initialState: {
        userObj: [],
       
    },
    reducers: {
        setUserObj: (state, action) => {
            console.log(state);
            console.log(action);
            state.userObj = action.payload; // data coming from the component 
        }
        // more methods as needed 
    }
});
export const { setUserObj, /* more methods */ } = UserSlice.actions;

export default UserSlice.reducer;