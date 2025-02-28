import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function UserDashboard() {
  return (
    <div>
         <Navbar style={{ backgroundColor: 'rgb(36,92,26)' }} data-bs-theme="dark">
        <>
        <Navbar.Brand className='ms-5'>Zoo Management System</Navbar.Brand>
          <Nav className="ms-auto">

           
            <Nav.Link as={Link} to='/UserDashboard/AdopAnimals' className='text-white'>Adop Animals</Nav.Link>
            <Nav.Link as={Link} to='/UserDashboard/ViewAdoptedAnimals' className='text-white'> View Adopted Animals</Nav.Link>
            <Nav.Link as={Link} to='/UserDashboard/Feedback' className='text-white'>Feedback</Nav.Link>
            <Nav.Link as={Link} to='/UserDashboard/UpdateUserPassword' className='text-white'>Update Password</Nav.Link>
            <Nav.Link as={Link} to='/UserDashboard/UpdateUserProfile' className='text-white'>Update Profile</Nav.Link>

            <Nav.Link as={Link} to='/' className='text-white me-5'>Logout</Nav.Link>

          </Nav>
        </>
      </Navbar>
      <Outlet />
    </div>
  )
}
