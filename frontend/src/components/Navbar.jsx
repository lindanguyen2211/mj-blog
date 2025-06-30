import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
        <li><NavLink to="/articles" className={({ isActive }) => isActive ? 'active-link' : ''}>Articles</NavLink></li>
        <li><NavLink to="/webinars" className={({ isActive }) => isActive ? 'active-link' : ''}>Webinars</NavLink></li>
        <li><NavLink to="/user-manual" className={({ isActive }) => isActive ? 'active-link' : ''}>User Manual</NavLink></li>
        <li><NavLink to="/4d-blog" className={({ isActive }) => isActive ? 'active-link' : ''}>4D Blog</NavLink></li>
        <li><NavLink to="/tutorials" className={({ isActive }) => isActive ? 'active-link' : ''}>Tutorials</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar