
// function omponent 
import './newApp.css';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <>
      {/* <MenuBar /> */}
      <div>
        <AppRoutes/>
      </div>
    </>
  );
}
export default App;







// // function omponent 
// import CompConcepts from './components/CompConcepts';
// import Home from './components/Home';
// import Login from './components/Login';
// import MenuBar from './components/MenuBar';
// import ProductDetails from './components/ProductDetails';
// import ProductList from './components/ProductList';

// const App = () => {
//   return (
//     <>
//       <MenuBar />
//       <div className="container py-3">
//         <h1>App Component</h1>
//         <p>App Deloitte React App</p>
//         {/* <Home></Home>  */}
//         {/* <Home /> */}
//         {/* <ProductList /> */}
//         {/* <ProductDetails /> */}
//         {/* <Login /> */}
//         <CompConcepts />
//       </div>
//     </>
//   );
// }
// export default App;

// // class component 

// import { Component } from 'react';
// import Home from './components/Home';

// class App extends Component {

//    firstName = 'Sonu';

//   render = () => {
//     const lastName = 'Reddy';
//     return (
//       <div className="App" >
//         <h1>App Component</h1>
//         <p>App Deloitte React App</p>
//         <p>{this.firstName}</p>
//         <p>{lastName}</p>
//         {/* <Home></Home> */}
//         <Home />
//       </div >
//     );
//   };
// }

// export default App;

// const App = () => {

//   const userName = 'Sonu';
//   const salary = 10.5;

//   const employee = {
//     firstName: 'Sonu',
//     salary: 10.5
//   };

//   return (
//     <div className="App">
//       <h1>Deloitte React App</h1>
//       <p>Deloitte ReactJS application is running...</p>
//       <p> {userName} </p>
//       <p>{salary}</p>
//       <p> {employee.firstName} </p>
//       <p> {employee.salary} </p>
//       {/* <p> {employee} </p> */}
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <h1>Deloitte React App</h1>
//       <p>Deloitte ReactJS application is running...</p>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
