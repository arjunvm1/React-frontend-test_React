import React from "react";
import pic from "../assets/membership.jpg";
import "./Main.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import pic3 from "../assets/img1.jpg";
import pic1 from '../assets/img2.jpg'
import pic2 from '../assets/img3.jpg'
import { Link } from "react-router-dom";


function Main() {
  return (
    <div>
      <div className="row">
        <div className="col  fir">
          <div className="head">
            <h1>New Arrival</h1>
            <p>
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationPosition: "under",
                }}
              >
                Join
              </span>{" "}
              Now
            </p>
          </div>
          <div className="con">
            {/* Removed border styling */}
            <img
              src={pic}
              alt="membership"
              className="membershipimg"
              style={{ border: "none" }}
            />
          </div>
          <div className="b1">
           <Link to={'/login'}> <button className="custom-button">Join Now</button></Link>
          </div>
        </div>

        

        {/* cards inside carousel */}
        <div className="col" style={{ marginTop: "100px" }}>
            <h1 className="c-head text-center " style={{color:'green'}}>Unlock Premium Features Now</h1>

          <MDBCarousel showControls showIndicators>
            <MDBCarouselItem itemId={1}>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={pic1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Lower</MDBCardTitle>
            <MDBCardTitle>Interest Rates</MDBCardTitle>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={pic2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Interest</MDBCardTitle>
            <MDBCardTitle>Free Payments</MDBCardTitle>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={pic3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Discount</MDBCardTitle>
            <MDBCardTitle>On Materials</MDBCardTitle>
           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img
                src="https://mdbootstrap.com/img/new/slides/042.jpg"
                className="d-block w-100"
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img
                src="https://mdbootstrap.com/img/new/slides/043.jpg"
                className="d-block w-100"
                alt="..."
              />
            </MDBCarouselItem>
          </MDBCarousel>
          <br />
          <div className="buttonns">
            <button className="cb1">Unlock Now</button>
            <button className="cb2">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
