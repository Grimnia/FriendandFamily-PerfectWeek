import React from "react";
import axios from 'axios';
// import NavBar from "NavBar";
import HomeForm from "./HomeForm";


class Home extends React.Component {

  render () {
    return (
    <div>
     <div className="imageworld" >
      <h1 className="Logotopic">PERFECT WEEK</h1>
        <div className="homeContainer">
         <div>
           <p>Pick the city! We do the rest</p>
         </div>
          <HomeForm sayHello={this.props.sayHello}/>
       </div>
     </div>
   </div>
    )
  }
}

export default Home
