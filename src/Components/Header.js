import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="ui fluid three item inverted menu">
        <Link to="/" className="item active">
          <i className="home icon" />
          Home
        </Link>
        <Link to="/skills" className="item">
          <i className="pencil alternate icon" />
          Skills
        </Link>
        <Link to="/projects" className="item">
          <i className="handshake outline icon" />
          Projects
        </Link>
      </div>
    </div>
  );
};
export default Header;