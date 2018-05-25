import React from 'react';
import {Link} from 'react-router';

class Homepage extends React.Component{
  render()
  {
    return(
      <div className="jumbotron">
         <h1> Patient Attendance </h1>
         <p> This is react redux application </p>
         <Link to ="about" className="btn btn-primary btn-lg"> Learn More </Link>
         <Link to ="about/you" className="btn btn-primary btn-lg"> Learn More button </Link>
      </div>
    );
  }
}


export default Homepage;
