import React, {PropTypes} from 'react';
import {Link , IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav>
        <IndexLink to ="/" activeClassName="active">HOME</IndexLink>
        {" | "}
        <Link to= "/about" activeClassName="active">ABOUT </Link>
        {" | "}
        <Link to= "/courses" activeClassName="active">COURSES</Link>
    </nav>
  );
};

export default Header;
