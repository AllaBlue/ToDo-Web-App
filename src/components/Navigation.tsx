import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-blue" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-blue" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "active-blue" : "text-white"
            }
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-blue" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? "active-blue" : "text-white"
            }
          >
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
