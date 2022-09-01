import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

import Header from './Header.jsx';
import CContainer from './Calls/Calls-Container.jsx';

class App extends Component {
  constructor(){
    super();
    this.state ={
      calls:[]
    };
  }
  componentDidMount(){
    fetch("https://aircall-job.herokuapp.com/activities")
    .then((result)=>result.json())
    .then((activity)=>
      this.setState(
        ()=>{
          return {calls:activity}
        },
        
      )
    );
  }
  render(){
    const calls = this.state;
    return(
    <div className='container'>
      <Header/>
      <br />
      {/* <UCall info={calls}/> */}
      <CContainer info={calls}/>
      </div>

    )

  }
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
