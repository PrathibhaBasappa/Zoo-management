import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function InchargeDahsboard() {
  return (
    <div>
      <Navbar style={{ backgroundColor: 'rgb(36,92,26)' }} data-bs-theme="dark">
        <>
          <Navbar.Brand className='ms-5'>Zoo Management System</Navbar.Brand>
          <Nav className="ms-auto">

            <Nav.Link as={Link} to='/InchargeDahsboard/ViewAnimals' className='text-white'>View Animals</Nav.Link>
            <Nav.Link as={Link} to='/InchargeDahsboard/AnimalHealth' className='text-white'>Animals Health Details</Nav.Link>
            <Nav.Link as={Link} to='/InchargeDahsboard/ApproveAdoptAnimal' className='text-white'>Approve Adopt Animals</Nav.Link>
            <Nav.Link as={Link} to='/InchargeDahsboard/ViewAdopteddetails' className='text-white'>View Adopt Animals</Nav.Link>
            <Nav.Link as={Link} to='/InchargeDahsboard/InchargePasswordUpdate' className='text-white'>Update Password</Nav.Link>
            <Nav.Link as={Link} to='/InchargeDahsboard/InchargeProfile' className='text-white'>Update Profile</Nav.Link>

            <Nav.Link as={Link} to='/' className='text-white me-5'>Logout</Nav.Link>

          </Nav>
        </>
      </Navbar>
      <Outlet />
    </div>
  )
}
