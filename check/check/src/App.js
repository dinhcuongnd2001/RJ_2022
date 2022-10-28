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

import Form from "./components/Form";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      // form: { name: "", phone: "", email: "" }
      value: "",
    };
  }
  handleChage = (event) => {
    let attr = event.target.name;
    this.setState({
      // form: { ...this.state.form, [attr]: event.target.value }
      value: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({ arr: [...this.state.arr, this.state.value] });
  };
  render() {
    console.log(this.state.arr);
    // console.log(this.state.form);
    return (
      <div className="App">
        <h1>Check here</h1>
        <Form handleChage={this.handleChage} handleClick={this.handleClick} />
      </div>
    );
  }
}
