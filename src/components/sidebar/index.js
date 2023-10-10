import { NavigationData } from "navigation"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Sidebar = () => {
  const location = useLocation()

  return (
    <ul className="w-64 h-[calc(100vh-5rem)] border-r border-gray-light p-4">
      {NavigationData.map((item, index) => (
        <li
          key={index}
          className={`mb-2 rounded hover:bg-primary transition-all ${
            location.pathname === item.path ? "bg-primary" : ""
          }`}
        >
          <Link
            className={`flex items-center py-4 px-4 cursor-pointer hover:text-white text-md ${
              location.pathname === item.path ? "text-white" : ""
            }`}
            to={item.path}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default Sidebar
