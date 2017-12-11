import React, {PropTypes} from 'react';
import {Link , IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return(
    <nav>
        <IndexLink to ="/" activeClassName="active">HOME</IndexLink>
        {" | "}
        <Link to= "/about" activeClassName="active">ABOUT </Link>
        {" | "}
        <Link to= "/courses" activeClassName="active">COURSES</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes ={
  loading: PropTypes.object.isRequired
};

export default Header;
