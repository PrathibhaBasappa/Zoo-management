import React, { useEffect, useState } from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../Image/bg.jpg';
import bg1 from '../Image/a1.jpg';
import a2 from '../Image/a2.jpg';
import bg3 from '../Image/bg3.jpg';
import bg5 from '../Image/bg5.jpg';
import zoo1 from '../Image/zoo1.jpg';
import adopt from '../Image/adopt.jpg';
import s1 from '../Image/s5.jpg';
import s2 from '../Image/lion.jpg';
import s3 from '../Image/tiger.jfif';
import s4 from '../Image/s4.jfif';


export default function Home() {


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand to='/' as={Link}>Zoo Management System</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/ViewAllAnimals" className="text-white">View Animals</Nav.Link>
            <Nav.Link as={Link} to="/Registration" className="text-white">User Registration</Nav.Link>
            <Nav.Link as={Link} to="/Login" className="text-white">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img src={zoo1} width="100%" height="500px" alt="Zoo Image 1" />
          <Carousel.Caption>
            <h1>Welcome To Zoo Management System</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={a2} width="100%" height="500px" alt="Background Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg} width="100%" height="500px" alt="Background Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg1} width="100%" height="500px" alt="Background Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg3} width="100%" height="500px" alt="Background Image 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg5} width="100%" height="500px" alt="Background Image 4" />
        </Carousel.Item>
      </Carousel>

      <div className="container py-5">
         <h2 className='col-sm-4 py-3 title text-danger'>Wildlife</h2>
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="row ">
              <div className="col-4 ">
                <img src={s1} className="img-fluid img-fixed shadow"  />
              </div>
              <div className="col-4">
                <img src={bg5} className="img-fluid img-fixed shadow"  />
              </div>
              <div className="col-4">
                <img src={s4} className="img-fluid img-fixed shadow" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-4 ">
                <img src={s2} className="img-fluid img-fixed shadow"   />
              </div>
              <div className="col-4">
                <img src={s3} className="img-fluid img-fixed shadow"  />
              </div>
              <div className="col-4">
                <img src={s4} className="img-fluid img-fixed shadow"/>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>


      <div className="container adopt mt-5">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="title">ADOPTION</h3>
            <p className="fs-4 para">
              The adoption programme is a novel way to show your support and care for wild animals.
              By adopting your favourite animal, you will contribute towards feeding
              of the animal for one full year (or period of adoption).
            </p>
          </div>
          <div className="col-sm-6">
            <img src={adopt} className="img-fluid" alt="Adoption" />
          </div>
        </div>
      </div>
    </div>
  );
}
