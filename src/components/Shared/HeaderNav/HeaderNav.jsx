import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo1 from "../../../assets/images/lyt.png";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderNav.css";

function HeaderNav() {
  const navigate = useNavigate();
  const handleRegistrationClick = () => {
    window.location.href = "/registration";
  };

  return (
    <div className="">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container className="p-0">
          {/* <Navbar.Brand>
            <Link to="/">
              <img
                src={logo1}
                width="100"
                height="55"
                className="d-inline-block align-top"
                alt="LYT LOGO"
              />
            </Link>
          </Navbar.Brand> */}
          <Navbar.Brand
            style={{ color: "#29a469" }}
            className="d-flex justify-between align-items-center w-100 font-semibold"
          >
            <img
              alt=""
              src={logo1}
              width="100"
              height="55"
              className="d-inline-block align-top"
            />{" "}
            <span
              style={{
                marginLeft: "3px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              LYT Global
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Link className="myNav" to="/">
                Home{" "}
              </Link>
              <Link className="myNav" to="/about">
                About
              </Link>
              <Link className="myNav" to="/services">
                Services
              </Link>
              <Link className="myNav" to="/events">
                Events{" "}
              </Link>
              {/* <Link className='myNav' to='/agents'>Agent </Link> */}

              {/* <Link  className='myNav'  onClick={handleRegistrationClick}>Registration </Link> */}

              <Link className="myNav" to="/universities">
                Universities
              </Link>
              <Link className="myNav" to="/contact">
                Contact
              </Link>
              {/* <Link className="myNav" to="/blogs">
                Blog
              </Link> */}
              <button
                className="myNav navBtn"
                onClick={handleRegistrationClick}
              >
                Registration
              </button>
              {/* <a
                className="myNav"
                target="_blank"
                href="https://shabujglobal.uuacrm.com/"
                rel="noreferrer"
              >
                Login
              </a> */}
              <a
                className="myNav"
                target="_blank"
                href="/login"
                rel="noreferrer"
              >
                Login
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default HeaderNav;
