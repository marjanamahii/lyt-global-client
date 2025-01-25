import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import avatarImg from "../../../assets/images/avatar.png";
// import logo1 from "../../../assets/images/lyt.png";
import logo1 from "../../../assets/images/lytlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderNav.css";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../../../redux/Features/Auth/AuthApi";
import { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import { logout } from "../../../redux/Features/Auth/AuthSlice";

function HeaderNav() {
  const navigate = useNavigate();
  // const handleRegistrationClick = () => {
  //   window.location.href = "/registration";
  // };

  // show user if logged in
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();

  // dropdowns menu
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // admin dropdown menus
  const adminDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage University", path: "/dashboard/manage-university" },
    { label: "All Users", path: "/dashboard/manage-users" },
    { label: "Add University", path: "/dashboard/add-university" },
  ];
  // user dropdown menus
  const userDropDownMenus = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
  ];

  const dropdownMenus =
    user?.role === "admin" ? [...adminDropDownMenus] : [...userDropDownMenus];

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log("Failed to log out", error);
    }
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
          {/* <Navbar.Brand
            style={{ color: "black" }}
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
          </Navbar.Brand> */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt="LYT Global Logo"
              src={logo1}
              width="100"
              height="60"
              className="d-inline-block align-top"
            />
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
              <Link className="myNav" to="/universities">
                Universities
              </Link>
              <Link className="myNav" to="/contact">
                Contact
              </Link>
              <Link className="myNav" to="/register">
                Register
              </Link>

              {user ? (
                <>
                  <Image
                    onClick={handleDropDownToggle}
                    src={user?.profileImage || avatarImg}
                    alt="User Profile"
                    className="cursor-pointer z-10"
                    roundedCircle
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    }}
                  />

                  <Dropdown
                    align="end"
                    show={isDropDownOpen}
                    onToggle={setIsDropDownOpen}
                  >
                    <Dropdown.Menu
                      className="p-2 shadow-lg"
                      style={{ minWidth: "12rem" }}
                    >
                      {dropdownMenus.map((menu, index) => (
                        <Dropdown.Item
                          key={index}
                          as={Link}
                          to={menu.path}
                          onClick={() => setIsDropDownOpen(false)}
                          className="dropdown-items"
                        >
                          {menu.label}
                        </Dropdown.Item>
                      ))}
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={handleLogout}
                        className="dropdown-items"
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <a
                  className="myNav"
                  target="_blank"
                  href="/login"
                  rel="noreferrer"
                >
                  Login
                </a>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default HeaderNav;
