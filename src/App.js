import logo from './logo.svg';
import './App.css';
import QRCode from 'react-qr-code';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <HandleQrInput></HandleQrInput>
      </header>
    </div>
  );
}
export default App;

class HandleQrInput extends React.Component{
  constructor (props) {
    super(props)
    this.state= { value :'', randomInt: 0} 
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event) {
    {/* We Can Generate Random Number  and change the state here */}
    this.setState({randomInt: Math.floor(Math.random() *10000000000000)}) 
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div style={{display:"flex"}, {flexDirection:"column"}}>
        <h1>The QR will say: {this.state.value}</h1>
        <h1>{this.state.randomInt}</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <QRCode value={this.state.value} />
      </div>
      
    )
  }
}




