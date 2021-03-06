// import React, { useState, Component } from 'react';
// import image from '../images/logo/download.jpeg';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText
// } from 'reactstrap';
// import Logout from './logout'

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   const {isAuthenticated, user} = props.auth

//   const authLink = (
//     <>
//     <NavItem>
//       <span className="navbar-text mr-3">
//         <strong>
//           {user ? `Welcome ${user.username}` : ''}
//         </strong>
//       </span>
//     </NavItem>
//     <NavItem>
//       <Logout/>
//     </NavItem>
//     </>
//   )

//   const guestLink = (
//     <>
//       <NavItem>
//         <NavLink href="/signin">Signin</NavLink>
//       </NavItem>
//     </>
//   )
//   // console.log(props.auth)
//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">
//           <img src={image} width="80px" className="pr-3" />reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             {
//               isAuthenticated ? authLink : guestLink
//             }

//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// Component.propTypes = {
//   auth: PropTypes.object
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// })

// export default connect(mapStateToProps, null)(Example);

import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  Navbar: {
    // backgroundColor: "red",
    fontSize: "20px",
  },
});

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div>
      <Container className={classes.Navbar}>
        <h2>{process.env.REACT_APP_NAME}</h2>
      </Container>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
