import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Component } from 'react';

// function App() {
//   const App = () =>{

//     const userName = 'Mido'
//     const salary = 25000
//     const employee = {
//       name: 'danish',
//       salary:26000

//     }
//   return (
//     <div className="App">
//       <h1>Welcome to Deloitte </h1>
//       <p>Deloitte LLP</p>
//       <h4>{userName}</h4>
//       <h4>{salary}</h4>
//       <h4>{employee.name}</h4>
//       <h4>{employee.salary}</h4>
//       <Home></Home>

//       <img src={logo} className="App-logo" alt="logo" />
//     </div>
//   );
// }


// class component

class App extends Component {

 fname="mido"
  render = () => {
    const lname="abcde"
    return (
      <div className="App">
        <h1>App component</h1>
        <p>app deloitte using react </p>
        <p>{this.fname}</p>
        <p>{lname}</p>
        <Home/>
        </div>
    )
  }
}
export default App;
// const newApp = () =>{
//   const user='Danish from newApp'

//   return (
//     <div>
//     <h1>{user} </h1>
//     </div>
//   )
// }



//export default App;
// export default newApp;





//import logo from './logo.svg';
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

