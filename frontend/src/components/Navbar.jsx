import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
        <li><NavLink to="/articles" className={({ isActive }) => isActive ? 'active-link' : ''}>Articles</NavLink></li>
        <li><NavLink to="/webinars" className={({ isActive }) => isActive ? 'active-link' : ''}>Webinars</NavLink></li>
        <li><NavLink to="/pdf/UserManual-EN4.1" className={({ isActive }) => isActive ? 'active-link' : ''}>User Manual</NavLink></li>
        <li><a href='https://modjaw.com/en/resources/4d-blog.html' target='_blank'>4D Blog</a></li>
        <li><NavLink to="/tutorials" className={({ isActive }) => isActive ? 'active-link' : ''}>Tutorials</NavLink></li>
        <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active-link' : ''}>Testimonials</NavLink></li>
        <li><NavLink to="/employee-resources" className={({ isActive }) => isActive ? 'active-link' : ''}>Employee Resources</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar