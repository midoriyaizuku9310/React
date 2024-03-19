import React, { Component ,useState, useEffect} from "react";

const Life = () => {

   

    const [salary, setSalary] = useState(25000);

    useEffect(() => {
        console.log('useEffect')
    
    })

    const increaseSalary = () => {
    setSalary(salary + 10000)
    }
        return (
            <div>
                <p>LifeCycle component</p>
                <p>Salary: {salary}</p>
                <button onClick={increaseSalary}>Increase salary</button>
            </div>
        )
    


}
export default Life;










// import React, { Component } from "react";

// class Life extends Component {
// c
//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         //equivalent to useState{}
//         this.state = { salary: 25000 }
//     }



//     increaseSalary = () => {
//         this.setState((prevState) => ({
//             salary: prevState.salary + 10000
//         }))
//     }

//     componentDidMount() {
//         console.log('componentDidMount()')
//     }

//     componentWillUnmount() {
//         console.log('componentWillUnmount()')
//     }

//     componentDidUpdate() {
//         console.log('componentDidUpdate()')
//     }


//     render() {
//         console.log('render()')
//         return (
//             <div>
//                 <p>LifeCycle component</p>
//                 <p>Salary: {this.state.salary}</p>
//                 <button onClick={this.increaseSalary}>Increase salary</button>
//             </div>
//         )
//     }


// }
// export default Life;