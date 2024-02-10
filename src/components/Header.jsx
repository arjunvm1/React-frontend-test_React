import React, { useState } from "react";
import pic from "../assets/real-estate-house.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Header.css";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div
        className="container1"
        style={{
          backgroundColor: "#dadada",
          width: "100%",
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={pic}
          alt="pic"
          height={"80px"}
          style={{ marginLeft: "10px" }}
        />
        <h4 style={{ textAlign: "center" }}>XYZ SYSTEMS LLP.</h4>
      </div>

      {/* nav */}
      
       
              <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer
                  fluid
                  className="d-flex justify-content-center align-items-center"
                >
                  <MDBNavbarToggler
                    type="button"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setOpenNav(!openNav)}
                  >
                    <MDBIcon icon="bars" fas />
                  </MDBNavbarToggler>
                  <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav className="justify-content-center">
                      <MDBNavbarItem>
                        <MDBNavbarLink active aria-current="page" href="#">
                          Home
                        </MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">DashBoard</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">Products</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">Transaction</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">Journal</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#" className="justify-content end"><i class="fa-solid fa-user"></i></MDBNavbarLink>
                      </MDBNavbarItem>

                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
      
      
    </>
  );
}

export default Header;
