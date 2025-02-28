import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function AdminDashboard() {
    return (
        <div>
            <Navbar style={{backgroundColor:'rgb(36,92,26)'}} data-bs-theme="dark">
                <>
                <Navbar.Brand className='ms-3'>Zoo Management System</Navbar.Brand>
                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to='/AdminDashboard/Category' className='text-white'>Add Category</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/Type' className='text-white'>Add Type</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/Incharge' className='text-white'>Add Incharge</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/Animals' className='text-white'>Add Animals</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/AdoptAnimalCharges' className='text-white'> Animal Charges</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/Doctors' className='text-white'>Add Doctors</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/ApproveUsers' className='text-white'>Approve Users</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/ViewFeedback' className='text-white'>View Feedback</Nav.Link>
                        <Nav.Link as={Link} to='/AdminDashboard/UpdateAdminPassword' className='text-white'>Profile</Nav.Link>
                        <Nav.Link as={Link} to='/' className='text-white me-3'>Logout</Nav.Link>

                    </Nav>
                </>
            </Navbar>
            <Outlet />
        </div>
    )
}
