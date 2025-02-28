import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function DoctorDashboard() {
  return (
    <div>
      <Navbar style={{ backgroundColor: 'rgb(36,92,26)' }} data-bs-theme="dark">
   
        <Navbar.Brand className='ms-5'>Zoo Management System</Navbar.Brand>
          <Nav className="ms-auto">

            <Nav.Link as={Link} to='/DoctorDashboard/AnimalHealthCheck' className='text-white'>Animals Health Details</Nav.Link>
            <Nav.Link as={Link} to='/DoctorDashboard/ViewHealthDetails' className='text-white'>View Health Details</Nav.Link>
            <Nav.Link as={Link} to='/DoctorDashboard/Doctorprofile' className='text-white'>Update Profile</Nav.Link>
            <Nav.Link as={Link} to='/DoctorDashboard/UpdateDoctorPassword' className='text-white'>Update Password</Nav.Link>

            <Nav.Link as={Link} to='/' className='text-white me-5'>Logout</Nav.Link>

          </Nav>
        
      </Navbar>
      <Outlet />
    </div>
  )
}
